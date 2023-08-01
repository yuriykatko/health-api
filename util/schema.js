function prepareJsonFormSchema(fhirObj) {
  const properties = {};
  const required = [];

  fhirObj.item.forEach(function mapQuestion(item) {
    if (item.repeats === true) {
      properties[item.linkId] = {
        type: "array",
        uniqueItems: true,
      };
    } else {
      properties[item.linkId] = {
        type: "string",
      };
    }

    if (item.type !== "string") {
      if (item.repeats === true) {
        properties[item.linkId].items = {
          oneOf: item.answerOption?.map(function mapOptions(option) {
            return {
              const: option.valueCoding.code,
              title: option.valueCoding.display,
            };
          }),
        };
      } else {
        properties[item.linkId].enum = item.answerOption?.map(
          (ans) => ans.valueCoding.display
        );
      }
    }

    if (item.required) {
      required.push(item.linkId);
    }
  });

  const result = {
    type: "object",
    properties,
    required,
  };

  return result;
}

function prepareJsonFormUISchema(fhirObj) {
  const elements = fhirObj.item.map(function mapQuestion(item) {
    const control = {
      type: "Control",
      label: item.text,
      scope: `#/properties/${item.linkId}`,
    };

    if (item.type === "string") {
      control.options = { multi: true };
    }

    return control;
  });

  const result = {
    type: "VerticalLayout",
    elements,
  };

  return result;
}

function prepareAnswer(jsonFormAns, fhirQuestion) {
  if (fhirQuestion.type === "choice") {
    if (typeof jsonFormAns === "string") {
      return {
        valueCoding: {
          code: jsonFormAns,
        },
      };
    }

    if (typeof jsonFormAns === "object") {
      return jsonFormAns.map(function mapAnswer(ans) {
        return {
          valueCoding: {
            code: ans,
          },
        };
      });
    }
  }

  if (fhirQuestion.type === "string") {
    return [{ valueString: jsonFormAns }];
  }
}

function getQuestionType(question) {
  if (question.type === "choice" && question.repeats === true) {
    return "array";
  }

  return "string";
}

export function prepareSchemaForJsonForm(fhirObj) {
  return {
    title: fhirObj.title,
    schema: prepareJsonFormSchema(fhirObj),
    uischema: prepareJsonFormUISchema(fhirObj),
  };
}

export function prepareSchemaForRJSF(fhirObj) {
  const result = {
    schema: {
      title: fhirObj.title,
      type: "object",
      required: [],
      properties: {},
    },
    uiSchema: {},
  };

  fhirObj.item.forEach(function mapQuestions(question) {
    if (question.required === true) {
      result.schema.required.push(question.linkId);
    }

    result.schema.properties[question.linkId] = {
      title: question.text,
      type: getQuestionType(question),
    };

    if (result.schema.properties[question.linkId].type === "array") {
      result.schema.properties[question.linkId].items = {
        type: "string",
        enum: question.answerOption.map((option) => option.valueCoding.display),
      };
      result.schema.properties[question.linkId].uniqueItems = true;

      result.uiSchema[question.linkId] = { "ui:widget": "checkboxes" };
    }

    if (
      result.schema.properties[question.linkId].type === "string" &&
      question.type === "choice"
    ) {
      result.schema.properties[question.linkId].enum =
        question.answerOption.map((option) => option.valueCoding.display);

      result.uiSchema[question.linkId] = { "ui:widget": "radio" };
    }

    if (question.type === "string") {
      result.uiSchema[question.linkId] = { "ui:widget": "textarea" };
    }
  });

  return result;
}

export function prepareSchemaForFHIR(jsonFormResponse, id, fhirQuestionnaire) {
  const result = {
    resourceType: "QuestionnaireResponse",
    questionnaire: `Questionnaire/${id}`,
    status: "completed",
    item: Object.keys(jsonFormResponse).map(function mapAnswer(key) {
      return {
        linkId: key,
        answer: prepareAnswer(
          jsonFormResponse[key],
          fhirQuestionnaire.item.find((item) => item.linkId === key)
        ),
      };
    }),
  };

  return result;
}
