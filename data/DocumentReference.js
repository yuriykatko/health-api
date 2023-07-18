const entities = [
  {
    fullUrl: "urn:uuid:5038570f-7e47-2c79-2929-20cdb3891541",
    resource: {
      resourceType: "DocumentReference",
      id: "5038570f-7e47-2c79-2929-20cdb3891541",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:200273f7-8c62-94e1-c340-e99cf9f078ad",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1944-04-23T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NDQtMDQtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNSB5ZWFyLW9sZCBub24taGlzcGFuaWMgd2hpdGUgbWFsZS4KCiMgU29jaWFsIEhpc3RvcnkKIFBhdGllbnQgcXVpdGUgc21va2luZyBhdCBhZ2UgMjAgYW5kIGlzIGFuIGFsY29ob2xpYy4KCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KClBhdGllbnQgY3VycmVudGx5IGhhcyBCbHVlIENyb3NzIEJsdWUgU2hpZWxkLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpObyBBY3RpdmUgTWVkaWNhdGlvbnMuCgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcGxhY2VkIG9uIGEgY2FyZXBsYW46Ci0gbXVzY3Vsb3NrZWxldGFsIGNhcmUK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:e8bc0159-8b0b-8ff7-b614-85a6a650cb26" },
        ],
        period: {
          start: "1944-04-23T02:40:58-04:00",
          end: "1944-04-23T03:40:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:57bbd77b-7f4c-69aa-30ea-26bcd17674df",
    resource: {
      resourceType: "DocumentReference",
      id: "57bbd77b-7f4c-69aa-30ea-26bcd17674df",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:b482983d-a2d4-09ed-4b1f-d0d2d6dbb793",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1955-11-18T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NTUtMTEtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMTcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuCgojIFNvY2lhbCBIaXN0b3J5CiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KClBhdGllbnQgY3VycmVudGx5IGhhcyBBbnRoZW0uCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:e1f0cb6f-8192-04eb-72db-7c5c3eceef2d" },
        ],
        period: {
          start: "1955-11-18T01:40:58-05:00",
          end: "1955-11-18T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:4353d593-284d-1767-2b59-506409495248",
    resource: {
      resourceType: "DocumentReference",
      id: "4353d593-284d-1767-2b59-506409495248",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:6472afd6-d965-16ee-5439-78739cbfe85f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1956-11-23T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NTYtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMTggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBZXRuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIHJlY2VpdmVkIGNlcnRpZmljYXRlIG9mIGhpZ2ggc2Nob29sIGVxdWl2YWxlbmN5IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KCg==",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:a63bab0b-bfa7-02f8-a81f-d134e8abae49" },
        ],
        period: {
          start: "1956-11-23T01:40:58-05:00",
          end: "1956-11-23T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:379bcd0c-f931-71ac-275a-38294b2dac2f",
    resource: {
      resourceType: "DocumentReference",
      id: "379bcd0c-f931-71ac-275a-38294b2dac2f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:ee59392a-816f-964d-45e5-f35926b3ee88",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1957-11-29T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NTctMTEtMjkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMTkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:ffe7916d-32bf-fd09-5444-3af0a42357ad" },
        ],
        period: {
          start: "1957-11-29T01:40:58-05:00",
          end: "1957-11-29T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:ef609bb8-d96a-525e-becd-4741c24dd157",
    resource: {
      resourceType: "DocumentReference",
      id: "ef609bb8-d96a-525e-becd-4741c24dd157",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e8b32bb4-e526-8af1-563c-89226b0325e2",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1960-12-02T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NjAtMTItMDIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMjIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEJsdWUgQ3Jvc3MgQmx1ZSBTaGllbGQuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:ab1b44a8-e592-358e-c82b-2ad93e761853" },
        ],
        period: {
          start: "1960-12-02T01:40:58-05:00",
          end: "1960-12-02T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:81da32b8-5d21-a0e2-c823-9817e467a015",
    resource: {
      resourceType: "DocumentReference",
      id: "81da32b8-5d21-a0e2-c823-9817e467a015",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:7a74a663-b696-0aa9-0067-535ae6c09a3e",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1963-12-06T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NjMtMTItMDYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMjUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:946b1ccf-b3fe-73e0-89fe-5c4eca918fbd" },
        ],
        period: {
          start: "1963-12-06T01:40:58-05:00",
          end: "1963-12-06T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:fbb1709b-8ddc-9704-c9e6-31a91065a9c1",
    resource: {
      resourceType: "DocumentReference",
      id: "fbb1709b-8ddc-9704-c9e6-31a91065a9c1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:cc81865f-4fb0-df6b-cbd3-76e4d528a22d",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1966-12-09T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NjYtMTItMDkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMjggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:a13656cd-5139-6065-fb02-e396ade6da0f" },
        ],
        period: {
          start: "1966-12-09T01:40:58-05:00",
          end: "1966-12-09T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:f7a6c0ec-a6ba-aa6f-e948-7307c94bf836",
    resource: {
      resourceType: "DocumentReference",
      id: "f7a6c0ec-a6ba-aa6f-e948-7307c94bf836",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:48f10e7c-d49b-d8cb-b37b-d773c1b44c85",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1969-12-12T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NjktMTItMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMzEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFldG5hLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpObyBBY3RpdmUgTWVkaWNhdGlvbnMuCgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KCg==",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:c3c7e2bb-ffc3-a8a8-c1aa-5d4849c89735" },
        ],
        period: {
          start: "1969-12-12T01:40:58-05:00",
          end: "1969-12-12T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:75800ba4-26f1-8635-2d1a-4ed8b2d06357",
    resource: {
      resourceType: "DocumentReference",
      id: "75800ba4-26f1-8635-2d1a-4ed8b2d06357",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:35c3decb-b985-2d87-8636-9b0f673f5de2",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1972-12-15T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NzItMTItMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMzQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFudGhlbS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:78d2eb6e-cb2c-b0d9-eef1-81ced734b85d" },
        ],
        period: {
          start: "1972-12-15T01:40:58-05:00",
          end: "1972-12-15T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:0dcbf4b0-d0fc-144c-2958-56d7a2047686",
    resource: {
      resourceType: "DocumentReference",
      id: "0dcbf4b0-d0fc-144c-2958-56d7a2047686",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:1cba3c0d-671d-ecfe-ac63-7d917446de20",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1975-12-19T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NzUtMTItMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMzcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFudGhlbS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:a195ade9-6085-554c-a315-88ec3974dd78" },
        ],
        period: {
          start: "1975-12-19T01:40:58-05:00",
          end: "1975-12-19T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:d4486b77-7f32-970c-acd7-975150b6e62c",
    resource: {
      resourceType: "DocumentReference",
      id: "d4486b77-7f32-970c-acd7-975150b6e62c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:f138a734-670b-80b2-7098-f42bc48635e4",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1978-10-06T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5NzgtMTAtMDYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:f3d0a0e4-3218-bbf7-717e-5d326d1b42bf" },
        ],
        period: {
          start: "1978-10-06T02:40:58-04:00",
          end: "1978-10-06T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:e5fa8a4d-20c1-d2b4-c7cb-42a756729536",
    resource: {
      resourceType: "DocumentReference",
      id: "e5fa8a4d-20c1-d2b4-c7cb-42a756729536",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:5c68c4e9-c7e7-3dcb-522e-20e2f078dc12",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1982-10-15T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5ODItMTAtMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGJvZHkgbWFzcyBpbmRleCAzMCsgLSBvYmVzaXR5IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:07ffec4d-5141-35f6-44fb-9f88c1223e2a" },
        ],
        period: {
          start: "1982-10-15T02:40:58-04:00",
          end: "1982-10-15T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:226393cc-5924-e42a-1ac4-6cb790e64cf4",
    resource: {
      resourceType: "DocumentReference",
      id: "226393cc-5924-e42a-1ac4-6cb790e64cf4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:2baf9f1e-e5b8-3912-fb5a-46af2862b12e",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1985-02-23T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5ODUtMDItMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBvc3Rlb2FydGhyaXRpcyBvZiBoaXAuIAoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBuYXByb3hlbiBzb2RpdW0gMjIwIG1nIG9yYWwgdGFibGV0ClRoZSBwYXRpZW50IHdhcyBwbGFjZWQgb24gYSBjYXJlcGxhbjoKLSBtdXNjdWxvc2tlbGV0YWwgY2FyZQo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
        ],
        period: {
          start: "1985-02-23T01:40:58-05:00",
          end: "1985-02-23T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:7afb5b05-bcba-7cce-df73-13595d30f5b9",
    resource: {
      resourceType: "DocumentReference",
      id: "7afb5b05-bcba-7cce-df73-13595d30f5b9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:6dd05fe6-6884-099a-53a5-fc717fd09f0e",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1986-10-24T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5ODYtMTAtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:cc78a557-b4d0-642f-fa8e-70a154f184e8" },
        ],
        period: {
          start: "1986-10-24T02:40:58-04:00",
          end: "1986-10-24T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:6e4b55a7-40b1-9603-fc06-baa1fc4f6a84",
    resource: {
      resourceType: "DocumentReference",
      id: "6e4b55a7-40b1-9603-fc06-baa1fc4f6a84",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:87c94ad5-ab2d-af4b-0df8-792c7d18faa6",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1988-09-30T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5ODgtMDktMzAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:a6f0d27d-801a-0af6-5be2-8e9ef2930c1e" },
        ],
        period: {
          start: "1988-09-30T02:40:58-04:00",
          end: "1988-09-30T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:1c785c4e-880f-a8b0-0126-707b1fbd3728",
    resource: {
      resourceType: "DocumentReference",
      id: "1c785c4e-880f-a8b0-0126-707b1fbd3728",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:b7c3ee60-0dae-b975-10c1-91eaca74a542",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1990-10-12T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTAtMTAtMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEJsdWUgQ3Jvc3MgQmx1ZSBTaGllbGQuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:b82c0a84-cd96-d86d-5812-c73e3794af9c" },
        ],
        period: {
          start: "1990-10-12T02:40:58-04:00",
          end: "1990-10-12T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:e68cf67c-67f3-c706-3246-b0a4c5d9e1d0",
    resource: {
      resourceType: "DocumentReference",
      id: "e68cf67c-67f3-c706-3246-b0a4c5d9e1d0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:1142850f-bf19-901c-4e0b-ff65734d2a7e",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1991-10-18T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTEtMTAtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFldG5hLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpObyBBY3RpdmUgTWVkaWNhdGlvbnMuCgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBoYXMgYSBjcmltaW5hbCByZWNvcmQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KCg==",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:baf9d9d4-62ba-4e7b-0e8f-ca4409adc107" },
        ],
        period: {
          start: "1991-10-18T02:40:58-04:00",
          end: "1991-10-18T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:90b4f6a5-a08f-8302-522b-651ae3bd8f6f",
    resource: {
      resourceType: "DocumentReference",
      id: "90b4f6a5-a08f-8302-522b-651ae3bd8f6f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:cb59c2f2-4ba8-7377-b074-59eed11c1be2",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1993-10-29T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTMtMTAtMjkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:cf267831-5a5f-01b0-79f9-3e84a5c9ef4c" },
        ],
        period: {
          start: "1993-10-29T02:40:58-04:00",
          end: "1993-10-29T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:0b1077f5-bb2e-08ae-dc5f-719c752d383b",
    resource: {
      resourceType: "DocumentReference",
      id: "0b1077f5-bb2e-08ae-dc5f-719c752d383b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e139d56d-e1fb-bf50-ea2f-d6408f6f40b5",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1994-11-04T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTQtMTEtMDQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBoeXBlcmxpcGlkZW1pYS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:dd53132e-bce0-5363-1a6d-29ec0933cfc6" },
        ],
        period: {
          start: "1994-11-04T01:40:58-05:00",
          end: "1994-11-04T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:a83cae45-74a2-69f0-712f-19179aba8bde",
    resource: {
      resourceType: "DocumentReference",
      id: "a83cae45-74a2-69f0-712f-19179aba8bde",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:57e8b5bf-3c99-c61b-b4bd-569eee163240",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1994-11-25T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTQtMTEtMjUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKVGhlIHBhdGllbnQgd2FzIHBsYWNlZCBvbiBhIGNhcmVwbGFuOgotIGh5cGVybGlwaWRlbWlhIGNsaW5pY2FsIG1hbmFnZW1lbnQgcGxhbgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062" },
        ],
        period: {
          start: "1994-11-25T01:40:58-05:00",
          end: "1994-11-25T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:b739189d-8177-7f4b-714e-43562e595ef9",
    resource: {
      resourceType: "DocumentReference",
      id: "b739189d-8177-7f4b-714e-43562e595ef9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:86833a3d-c80a-9c17-0c83-e81825e6ce58",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1995-11-10T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTUtMTEtMTAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:1b75fab2-0e5e-8169-a796-be72bd4d5bcd" },
        ],
        period: {
          start: "1995-11-10T01:40:58-05:00",
          end: "1995-11-10T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:7c2d7db4-ee2c-436b-c9af-74771576408d",
    resource: {
      resourceType: "DocumentReference",
      id: "7c2d7db4-ee2c-436b-c9af-74771576408d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:0ff5e7ef-771e-7f83-4ae2-5bc965028df8",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1995-11-25T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTUtMTEtMjUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:965abeb3-4174-d8ba-9515-a7b3e83d9172" },
        ],
        period: {
          start: "1995-11-25T01:40:58-05:00",
          end: "1995-11-25T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:7eaabd4f-f415-2466-2052-3165fed03135",
    resource: {
      resourceType: "DocumentReference",
      id: "7eaabd4f-f415-2466-2052-3165fed03135",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:fb9ad0f9-29cc-f6d1-5ad8-23204d2ada24",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1996-11-15T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTYtMTEtMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:718fa39f-ba82-2900-67fa-3dba15c61ffa" },
        ],
        period: {
          start: "1996-11-15T01:40:58-05:00",
          end: "1996-11-15T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:20165b08-7876-79dc-fc78-529ea48652c3",
    resource: {
      resourceType: "DocumentReference",
      id: "20165b08-7876-79dc-fc78-529ea48652c3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:eba75a9f-b79e-41f9-d35b-598a2ef34517",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1996-11-24T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTYtMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:2333b1cd-ad09-3073-0696-ee9c140737b6" },
        ],
        period: {
          start: "1996-11-24T01:40:58-05:00",
          end: "1996-11-24T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:4af0cd79-9cb6-5c47-43c7-b92d6b5ea534",
    resource: {
      resourceType: "DocumentReference",
      id: "4af0cd79-9cb6-5c47-43c7-b92d6b5ea534",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e36603ec-b82c-f09e-e4c2-0701f32ae5bf",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1997-11-24T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTctMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:495d60aa-d26c-964a-ea81-a109ea280cad" },
        ],
        period: {
          start: "1997-11-24T01:40:58-05:00",
          end: "1997-11-24T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:1f2d0611-d134-419a-fa7e-d6940f065710",
    resource: {
      resourceType: "DocumentReference",
      id: "1f2d0611-d134-419a-fa7e-d6940f065710",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:dc4db679-3448-1519-71e9-3533e93df3c0",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1998-11-24T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTgtMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKS4gCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIHNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0Cg==",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28" },
        ],
        period: {
          start: "1998-11-24T01:40:58-05:00",
          end: "1998-11-24T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:383ad82a-e257-3f5a-0916-f91b821524ad",
    resource: {
      resourceType: "DocumentReference",
      id: "383ad82a-e257-3f5a-0916-f91b821524ad",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e9d8777b-45bc-329c-3fcd-7293a461f9a3",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1999-11-24T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTktMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBZXRuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:1478d811-530a-72f3-d291-2bbdea8a5fde" },
        ],
        period: {
          start: "1999-11-24T01:40:58-05:00",
          end: "1999-11-24T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:3984c015-99f9-d15d-e2d9-f596a455cc10",
    resource: {
      resourceType: "DocumentReference",
      id: "3984c015-99f9-d15d-e2d9-f596a455cc10",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:25ed837e-ea1d-fbb2-471a-5f32b68e6668",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "1999-12-03T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjE5OTktMTItMDMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBZXRuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:784cf40a-63a4-811c-7a48-76166a7532df" },
        ],
        period: {
          start: "1999-12-03T01:40:58-05:00",
          end: "1999-12-03T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:b7cc0bcd-4d2a-4b62-3266-165f03ba0b86",
    resource: {
      resourceType: "DocumentReference",
      id: "b7cc0bcd-4d2a-4b62-3266-165f03ba0b86",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:c092dbb7-3a48-1928-e9b1-1eb6922e2e9f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2000-11-23T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDAtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBbnRoZW0uCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIHNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0Cg==",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:07b6f41f-e852-a015-9767-7bc44503fb3e" },
        ],
        period: {
          start: "2000-11-23T01:40:58-05:00",
          end: "2000-11-23T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:4ccfadd8-f877-dd83-b845-a6160f40973c",
    resource: {
      resourceType: "DocumentReference",
      id: "4ccfadd8-f877-dd83-b845-a6160f40973c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:98e190e4-1ad8-6edd-dab9-ca7a023a55ca",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2001-11-23T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDEtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBVbml0ZWRIZWFsdGhjYXJlLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:2f8bd24b-1c19-084c-3350-c62c7b9c9ace" },
        ],
        period: {
          start: "2001-11-23T01:40:58-05:00",
          end: "2001-11-23T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:928b2a03-7007-cf52-07e3-1c3cb028c712",
    resource: {
      resourceType: "DocumentReference",
      id: "928b2a03-7007-cf52-07e3-1c3cb028c712",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:06d8a3f1-27a2-ea32-5858-3a8a5c879b79",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2001-12-14T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDEtMTItMTQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBVbml0ZWRIZWFsdGhjYXJlLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:67eace0b-9f1e-5b52-0c1f-4c1b91626ca0" },
        ],
        period: {
          start: "2001-12-14T01:40:58-05:00",
          end: "2001-12-14T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:661ccaa6-d32f-9cf1-52c4-f048b0c1718f",
    resource: {
      resourceType: "DocumentReference",
      id: "661ccaa6-d32f-9cf1-52c4-f048b0c1718f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:38d9dd19-f6a7-5f5d-1bb5-439bf6ef89d8",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2002-11-23T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDItMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBCbHVlIENyb3NzIEJsdWUgU2hpZWxkLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:0065e2e0-f9e1-13d2-7a75-8bad676cb53e" },
        ],
        period: {
          start: "2002-11-23T01:40:58-05:00",
          end: "2002-11-23T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:f0e796a7-6cd8-c244-bb95-defcd07470e7",
    resource: {
      resourceType: "DocumentReference",
      id: "f0e796a7-6cd8-c244-bb95-defcd07470e7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:8c7f95e6-32f5-6679-3d96-44275802a2d6",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2003-11-23T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDMtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:1b000b85-ccb2-85e5-4228-caa08544105a" },
        ],
        period: {
          start: "2003-11-23T01:40:58-05:00",
          end: "2003-11-23T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:95f35892-56dd-cddd-40a3-c0c174035929",
    resource: {
      resourceType: "DocumentReference",
      id: "95f35892-56dd-cddd-40a3-c0c174035929",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:47e6d848-3a7d-9134-3eb7-b19e9d400cd2",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2003-12-26T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDMtMTItMjYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:6c46bd34-4e70-4fed-1b47-d0bc19abebf8" },
        ],
        period: {
          start: "2003-12-26T01:40:58-05:00",
          end: "2003-12-26T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:e883f97e-a5e0-3a14-2a6f-309b11201a42",
    resource: {
      resourceType: "DocumentReference",
      id: "e883f97e-a5e0-3a14-2a6f-309b11201a42",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:1f303571-d426-f8b5-00a9-2d9dae3bdf2f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2004-11-22T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDQtMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:bb71b8f5-15d4-337a-ab7f-310698989b95" },
        ],
        period: {
          start: "2004-11-22T01:40:58-05:00",
          end: "2004-11-22T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:45755ac3-75a5-df1f-20f6-78422186b6bd",
    resource: {
      resourceType: "DocumentReference",
      id: "45755ac3-75a5-df1f-20f6-78422186b6bd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e9486dd8-1928-9ce0-4f14-34ef5ddfcb80",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2004-12-31T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDQtMTItMzEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:55eb54d4-94a2-35f9-5396-a3184da89585" },
        ],
        period: {
          start: "2004-12-31T01:40:58-05:00",
          end: "2004-12-31T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:1ba5ba73-9911-f45b-2624-33b88be5497a",
    resource: {
      resourceType: "DocumentReference",
      id: "1ba5ba73-9911-f45b-2624-33b88be5497a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:5b887626-57dd-0c44-9e04-2d7998fd8946",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2005-11-22T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDUtMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:09103c57-d806-a5b3-bce1-e27a4311cd46" },
        ],
        period: {
          start: "2005-11-22T01:40:58-05:00",
          end: "2005-11-22T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:005a5277-03a9-08d7-7e6e-78dc695ce2f4",
    resource: {
      resourceType: "DocumentReference",
      id: "005a5277-03a9-08d7-7e6e-78dc695ce2f4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:17c9aed2-4a0b-346d-b20f-67b3e91010ab",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2006-11-22T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDYtMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:54ff763b-773d-17d9-5010-291d2e62dc59" },
        ],
        period: {
          start: "2006-11-22T01:40:58-05:00",
          end: "2006-11-22T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:65e02efb-67be-98bb-ac5b-0cb3c6688bb4",
    resource: {
      resourceType: "DocumentReference",
      id: "65e02efb-67be-98bb-ac5b-0cb3c6688bb4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:b8febae5-48ac-67de-7edc-486cb2dbbd44",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2007-01-12T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDctMDEtMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:e8bc1e87-0c82-b107-3fa9-8ac889079795" },
        ],
        period: {
          start: "2007-01-12T01:40:58-05:00",
          end: "2007-01-12T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:6994a59a-f035-6068-8e85-1f003e5bdf6a",
    resource: {
      resourceType: "DocumentReference",
      id: "6994a59a-f035-6068-8e85-1f003e5bdf6a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:8793c66a-0ee4-8930-025a-5c64b5d7dbec",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2007-11-22T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDctMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:fcbad825-7d87-65a6-6edb-457d75cb4909" },
        ],
        period: {
          start: "2007-11-22T01:40:58-05:00",
          end: "2007-11-22T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:9e9922f0-f5a1-2187-1a69-4fd69bc3c538",
    resource: {
      resourceType: "DocumentReference",
      id: "9e9922f0-f5a1-2187-1a69-4fd69bc3c538",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:0b03f288-c2ff-f003-994f-8e191170d890",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2008-11-21T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDgtMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:9afd5dd5-5d49-fbfd-8de1-467729f031df" },
        ],
        period: {
          start: "2008-11-21T01:40:58-05:00",
          end: "2008-11-21T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:f9aa6d4f-b17d-9d7a-a6ce-c4a82960102f",
    resource: {
      resourceType: "DocumentReference",
      id: "f9aa6d4f-b17d-9d7a-a6ce-c4a82960102f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:58d4da2d-9227-7398-5737-67896ea20749",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2009-01-23T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDktMDEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:a741082d-de56-2dcc-c2bc-9e2d734cec10" },
        ],
        period: {
          start: "2009-01-23T01:40:58-05:00",
          end: "2009-01-23T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:7d2de736-918e-75e3-1c33-95aefc0cb29f",
    resource: {
      resourceType: "DocumentReference",
      id: "7d2de736-918e-75e3-1c33-95aefc0cb29f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:69bd9536-c160-9805-eb3b-41e737369c18",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2009-11-21T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMDktMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:32805baa-8f71-da8d-4b1a-6661022b0270" },
        ],
        period: {
          start: "2009-11-21T01:40:58-05:00",
          end: "2009-11-21T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:5fdadb8d-5d27-1eb2-b27e-3192e30ba6e4",
    resource: {
      resourceType: "DocumentReference",
      id: "5fdadb8d-5d27-1eb2-b27e-3192e30ba6e4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:617e192a-1e80-e733-0100-5e43f1539962",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2010-11-21T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTAtMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:e0df8625-5bef-8d32-c0cf-80ddea40b2bd" },
        ],
        period: {
          start: "2010-11-21T01:40:58-05:00",
          end: "2010-11-21T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:41d20bc2-d0f5-91c9-9877-9085075ef6e5",
    resource: {
      resourceType: "DocumentReference",
      id: "41d20bc2-d0f5-91c9-9877-9085075ef6e5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:d679d3a2-5a6e-a7a9-b99f-3e1b7c71caf7",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2011-02-04T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTEtMDItMDQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:e1c4709a-b1a2-d143-3564-eafbc2cfa0b9" },
        ],
        period: {
          start: "2011-02-04T01:40:58-05:00",
          end: "2011-02-04T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:6c6053b9-3cd7-2ee7-40d1-241ddae47afe",
    resource: {
      resourceType: "DocumentReference",
      id: "6c6053b9-3cd7-2ee7-40d1-241ddae47afe",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:0265c1eb-c640-7b0f-3713-46cb1eb2fd5e",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2011-11-21T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTEtMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:7b15ad1a-24c8-0d45-c32f-9941233f3e20" },
        ],
        period: {
          start: "2011-11-21T01:40:58-05:00",
          end: "2011-11-21T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:7d71382a-edf5-12a0-b12e-54d2f0533e4f",
    resource: {
      resourceType: "DocumentReference",
      id: "7d71382a-edf5-12a0-b12e-54d2f0533e4f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:69ec984a-dc95-9a53-ad4d-9cbbbc5c8a79",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2012-02-10T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTItMDItMTAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLiAKCiMjIFBsYW4KUGF0aWVudCB3YXMgZ2l2ZW4gdGhlIGZvbGxvd2luZyBpbW11bml6YXRpb25zOiBpbmZsdWVuemEsIHNlYXNvbmFsLCBpbmplY3RhYmxlLCBwcmVzZXJ2YXRpdmUgZnJlZS4gClRoZSBmb2xsb3dpbmcgcHJvY2VkdXJlcyB3ZXJlIGNvbmR1Y3RlZDoKLSBhc3Nlc3NtZW50IG9mIGhlYWx0aCBhbmQgc29jaWFsIGNhcmUgbmVlZHMgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IG9mIHN1YnN0YW5jZSB1c2UgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IHVzaW5nIGFsY29ob2wgdXNlIGRpc29yZGVycyBpZGVudGlmaWNhdGlvbiB0ZXN0IC0gY29uc3VtcHRpb24gKHByb2NlZHVyZSkK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
        ],
        period: {
          start: "2012-02-10T01:40:58-05:00",
          end: "2012-02-10T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:56173c58-b53e-3e0e-6d0f-bd7295817cf8",
    resource: {
      resourceType: "DocumentReference",
      id: "56173c58-b53e-3e0e-6d0f-bd7295817cf8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:78e05b6f-6f1a-9b7f-ec4c-25ed39e3e53f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2012-11-20T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTItMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
        ],
        period: {
          start: "2012-11-20T01:40:58-05:00",
          end: "2012-11-20T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:62f4fc04-6f16-02f5-9b39-3d3312922193",
    resource: {
      resourceType: "DocumentReference",
      id: "62f4fc04-6f16-02f5-9b39-3d3312922193",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:7b39c955-709d-0b5c-ff3d-56128d0e76b9",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2013-02-15T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTMtMDItMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IGluZmx1ZW56YSwgc2Vhc29uYWwsIGluamVjdGFibGUsIHByZXNlcnZhdGl2ZSBmcmVlLiAKVGhlIGZvbGxvd2luZyBwcm9jZWR1cmVzIHdlcmUgY29uZHVjdGVkOgotIGFzc2Vzc21lbnQgb2YgaGVhbHRoIGFuZCBzb2NpYWwgY2FyZSBuZWVkcyAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
        ],
        period: {
          start: "2013-02-15T01:40:58-05:00",
          end: "2013-02-15T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:e71fe89c-6cbc-ed9c-d7e3-ebac9a8e3320",
    resource: {
      resourceType: "DocumentReference",
      id: "e71fe89c-6cbc-ed9c-d7e3-ebac9a8e3320",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e62b9b07-d85b-0cad-c426-aecb2d87f971",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2013-11-20T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTMtMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
        ],
        period: {
          start: "2013-11-20T01:40:58-05:00",
          end: "2013-11-20T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:ce7670ac-1c50-ccd0-2d89-d64cd02132d8",
    resource: {
      resourceType: "DocumentReference",
      id: "ce7670ac-1c50-ccd0-2d89-d64cd02132d8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:cd712de4-4555-5923-9891-8e7a0cfc2331",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2014-02-02T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTQtMDItMDIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBjaHJvbmljIGxvdyBiYWNrIHBhaW4gKGZpbmRpbmcpLCBmaWJyb215YWxnaWEgKGRpc29yZGVyKS4gCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Cg==",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
        ],
        period: {
          start: "2014-02-02T01:40:58-05:00",
          end: "2014-02-02T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:d51b8281-f521-385a-6d75-964d57a55c38",
    resource: {
      resourceType: "DocumentReference",
      id: "d51b8281-f521-385a-6d75-964d57a55c38",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:10216489-00a4-1754-3a32-627667f410f9",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2014-02-21T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTQtMDItMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggcGFydC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCB2aWN0aW0gb2YgaW50aW1hdGUgcGFydG5lciBhYnVzZSAoZmluZGluZykuIAoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IGluZmx1ZW56YSwgc2Vhc29uYWwsIGluamVjdGFibGUsIHByZXNlcnZhdGl2ZSBmcmVlLiAKVGhlIGZvbGxvd2luZyBwcm9jZWR1cmVzIHdlcmUgY29uZHVjdGVkOgotIGFzc2Vzc21lbnQgb2YgaGVhbHRoIGFuZCBzb2NpYWwgY2FyZSBuZWVkcyAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Cg==",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
        ],
        period: {
          start: "2014-02-21T01:40:58-05:00",
          end: "2014-02-21T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:030a2da7-7c94-627e-f53c-84def7e67d9b",
    resource: {
      resourceType: "DocumentReference",
      id: "030a2da7-7c94-627e-f53c-84def7e67d9b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:4ad16258-6749-c57e-3a3e-fa4c176fc7bf",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2014-03-27T05:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTQtMDMtMjcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF0KVGhlIHBhdGllbnQgd2FzIHBsYWNlZCBvbiBhIGNhcmVwbGFuOgotIHRoZXJhcHkgKHJlZ2ltZS90aGVyYXB5KQo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
        ],
        period: {
          start: "2014-03-27T05:40:58-04:00",
          end: "2014-03-27T05:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:2df1f0a3-30b9-e4b6-f632-37266c6667d6",
    resource: {
      resourceType: "DocumentReference",
      id: "2df1f0a3-30b9-e4b6-f632-37266c6667d6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:fd3ff796-8a89-98ce-d9cc-adb083d7f417",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2014-11-20T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTQtMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF07IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIHNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0Cg==",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
        ],
        period: {
          start: "2014-11-20T01:40:58-05:00",
          end: "2014-11-20T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:92d4edf2-6487-d821-33a6-c8f7768343e0",
    resource: {
      resourceType: "DocumentReference",
      id: "92d4edf2-6487-d821-33a6-c8f7768343e0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:c1c815b7-810f-e9b4-b1d4-1f8323be60a3",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2015-01-07T05:10:52.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTUtMDEtMDcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF07IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gY29sb25vc2NvcHkK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:dc2fc493-9d4f-4ada-91d2-9e81690a983d" },
        ],
        period: {
          start: "2015-01-07T05:10:52-05:00",
          end: "2015-01-07T05:53:33-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:dd44f1dc-e595-e87c-9c51-0071371e952d",
    resource: {
      resourceType: "DocumentReference",
      id: "dd44f1dc-e595-e87c-9c51-0071371e952d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:f1c4a06e-63d4-77b7-b283-a4a3337bff6c",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2015-02-27T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTUtMDItMjcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF07IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggYXRyaWFsIGZpYnJpbGxhdGlvbiwgcGFydC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KUGF0aWVudCB3YXMgZ2l2ZW4gdGhlIGZvbGxvd2luZyBpbW11bml6YXRpb25zOiBpbmZsdWVuemEsIHNlYXNvbmFsLCBpbmplY3RhYmxlLCBwcmVzZXJ2YXRpdmUgZnJlZS4gClRoZSBmb2xsb3dpbmcgcHJvY2VkdXJlcyB3ZXJlIGNvbmR1Y3RlZDoKLSBjYXRoZXRlciBhYmxhdGlvbiBvZiB0aXNzdWUgb2YgaGVhcnQKLSBhc3Nlc3NtZW50IG9mIGhlYWx0aCBhbmQgc29jaWFsIGNhcmUgbmVlZHMgKHByb2NlZHVyZSkKLSBkZXByZXNzaW9uIHNjcmVlbmluZyAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIHVzaW5nIHBhdGllbnQgaGVhbHRoIHF1ZXN0aW9ubmFpcmUgdHdvLWl0ZW0gc2NvcmUgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IG9mIHN1YnN0YW5jZSB1c2UgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IHVzaW5nIGFsY29ob2wgdXNlIGRpc29yZGVycyBpZGVudGlmaWNhdGlvbiB0ZXN0IC0gY29uc3VtcHRpb24gKHByb2NlZHVyZSkKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSB3YXJmYXJpbiBzb2RpdW0gNSBtZyBvcmFsIHRhYmxldAotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
        ],
        period: {
          start: "2015-02-27T01:40:58-05:00",
          end: "2015-02-27T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:8b11c138-db6c-2cbb-562b-d63e075f64f9",
    resource: {
      resourceType: "DocumentReference",
      id: "8b11c138-db6c-2cbb-562b-d63e075f64f9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:d207cb9c-4f69-4689-7cc0-7aebc58e7467",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2015-11-20T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTUtMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
        ],
        period: {
          start: "2015-11-20T01:40:58-05:00",
          end: "2015-11-20T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:879cfbcb-b5e4-0f5a-2eed-1d90e51507fa",
    resource: {
      resourceType: "DocumentReference",
      id: "879cfbcb-b5e4-0f5a-2eed-1d90e51507fa",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:5c55692e-d9f5-f11e-2c6f-f1888168067a",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2016-03-04T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTYtMDMtMDQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHN0cmVzcyAoZmluZGluZykuIAoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IGluZmx1ZW56YSwgc2Vhc29uYWwsIGluamVjdGFibGUsIHByZXNlcnZhdGl2ZSBmcmVlLiAKVGhlIGZvbGxvd2luZyBwcm9jZWR1cmVzIHdlcmUgY29uZHVjdGVkOgotIGVsZWN0cmljYWwgY2FyZGlvdmVyc2lvbgotIGFzc2Vzc21lbnQgb2YgaGVhbHRoIGFuZCBzb2NpYWwgY2FyZSBuZWVkcyAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
        ],
        period: {
          start: "2016-03-04T01:40:58-05:00",
          end: "2016-03-04T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:0c4f8ee8-651a-7483-a442-6147b98f079a",
    resource: {
      resourceType: "DocumentReference",
      id: "0c4f8ee8-651a-7483-a442-6147b98f079a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:908ab929-e572-6b66-c75b-0a23091c7252",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2016-11-19T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTYtMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
        ],
        period: {
          start: "2016-11-19T01:40:58-05:00",
          end: "2016-11-19T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:a1ef051e-992f-a90e-2a7b-4b52f87b0974",
    resource: {
      resourceType: "DocumentReference",
      id: "a1ef051e-992f-a90e-2a7b-4b52f87b0974",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:b40b41aa-14d5-d90e-e5cb-e83eb299b86f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2017-03-10T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTctMDMtMTAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHJlcG9ydHMgb2YgdmlvbGVuY2UgaW4gdGhlIGVudmlyb25tZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gZWxlY3RyaWNhbCBjYXJkaW92ZXJzaW9uCi0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gYXNzZXNzbWVudCBvZiBhbnhpZXR5IChwcm9jZWR1cmUpCi0gYXNzZXNzbWVudCB1c2luZyBtb3JzZSBmYWxsIHNjYWxlIChwcm9jZWR1cmUpCi0gc2NyZWVuaW5nIGZvciBkb21lc3RpYyBhYnVzZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
        ],
        period: {
          start: "2017-03-10T01:40:58-05:00",
          end: "2017-03-10T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:320ac8b1-039c-3a1b-752c-0e2c914dcd88",
    resource: {
      resourceType: "DocumentReference",
      id: "320ac8b1-039c-3a1b-752c-0e2c914dcd88",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:bf5f3c8b-a26f-8212-b2f0-69b164338e57",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2017-06-07T13:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTctMDYtMDcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGFjdXRlIHZpcmFsIHBoYXJ5bmdpdGlzIChkaXNvcmRlcikuIAoKIyMgUGxhbgoK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:9ccbf5a3-78c2-dd31-5e05-6ad80a34e923" },
        ],
        period: {
          start: "2017-06-07T13:40:58-04:00",
          end: "2017-06-07T13:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:2112ed64-8c36-c58d-273f-1ede3eac6a5e",
    resource: {
      resourceType: "DocumentReference",
      id: "2112ed64-8c36-c58d-273f-1ede3eac6a5e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:165871b1-863d-1aa2-cb9a-d605e81dbdfd",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2017-11-19T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTctMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
        ],
        period: {
          start: "2017-11-19T01:40:58-05:00",
          end: "2017-11-19T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:3e34572f-fc57-6b83-8707-1de09d20ce2d",
    resource: {
      resourceType: "DocumentReference",
      id: "3e34572f-fc57-6b83-8707-1de09d20ce2d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:947c3bfd-f779-d903-fc2d-828fcb5bb98f",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2018-03-16T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTgtMDMtMTYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gZWxlY3RyaWNhbCBjYXJkaW92ZXJzaW9uCi0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
        ],
        period: {
          start: "2018-03-16T02:40:58-04:00",
          end: "2018-03-16T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:1a5e805b-5469-9e31-3419-3ea54a3ea1a7",
    resource: {
      resourceType: "DocumentReference",
      id: "1a5e805b-5469-9e31-3419-3ea54a3ea1a7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:5a35ebce-dd87-08eb-88aa-76e939d2bb78",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2018-11-19T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTgtMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
        ],
        period: {
          start: "2018-11-19T01:40:58-05:00",
          end: "2018-11-19T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:004e3001-fdbd-1870-1ea2-198b9676c1ea",
    resource: {
      resourceType: "DocumentReference",
      id: "004e3001-fdbd-1870-1ea2-198b9676c1ea",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:48236e49-c8cf-c05a-71aa-7af12ea0b011",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2019-03-22T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTktMDMtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gZWxlY3RyaWNhbCBjYXJkaW92ZXJzaW9uCi0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2YgYW54aWV0eSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIHNjcmVlbmluZyBmb3IgZG9tZXN0aWMgYWJ1c2UgKHByb2NlZHVyZSkKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF0KLSB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZwotIGRpZ294aW4gMC4xMjUgbWcgb3JhbCB0YWJsZXQKLSBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAotIHdhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0Cg==",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
        ],
        period: {
          start: "2019-03-22T02:40:58-04:00",
          end: "2019-03-22T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:d56cf70e-3089-5120-19d5-d578abb1527d",
    resource: {
      resourceType: "DocumentReference",
      id: "d56cf70e-3089-5120-19d5-d578abb1527d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:aae9d803-9fdb-487f-dfd3-63fbda1cfa5c",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2019-11-19T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMTktMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
        ],
        period: {
          start: "2019-11-19T01:40:58-05:00",
          end: "2019-11-19T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:026c1d68-8ad1-e21e-950b-621b059cdc9b",
    resource: {
      resourceType: "DocumentReference",
      id: "026c1d68-8ad1-e21e-950b-621b059cdc9b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:4b4952bb-0f14-6432-3429-6b020e0881d5",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2020-03-27T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMjAtMDMtMjcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUsIHRkIChhZHVsdCkgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gY2F0aGV0ZXIgYWJsYXRpb24gb2YgdGlzc3VlIG9mIGhlYXJ0Ci0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2YgYW54aWV0eSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
        ],
        period: {
          start: "2020-03-27T02:40:58-04:00",
          end: "2020-03-27T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:bae5beba-39dc-0490-91bc-c01cfb312b15",
    resource: {
      resourceType: "DocumentReference",
      id: "bae5beba-39dc-0490-91bc-c01cfb312b15",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e2052ee2-0c71-ef8d-f643-76815df6fcea",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2020-11-18T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMjAtMTEtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
        ],
        period: {
          start: "2020-11-18T01:40:58-05:00",
          end: "2020-11-18T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:8abe7e89-5f34-8c67-ba59-c1d1b98f431f",
    resource: {
      resourceType: "DocumentReference",
      id: "8abe7e89-5f34-8c67-ba59-c1d1b98f431f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:fca2ea54-35e2-3a9f-6726-32fa9c96e477",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2021-03-12T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMjEtMDMtMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IHNhcnMtY292LTIgKGNvdmlkLTE5KSB2YWNjaW5lLCBtcm5hLCBzcGlrZSBwcm90ZWluLCBsbnAsIHByZXNlcnZhdGl2ZSBmcmVlLCAxMDAgbWNnLzAuNW1sIGRvc2UuIAo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:5ef6b653-7ec7-85ff-8931-2c8eec210e3d" },
        ],
        period: {
          start: "2021-03-12T01:40:58-05:00",
          end: "2021-03-12T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:37140845-dc10-0e29-f5d5-6933fe88b1a6",
    resource: {
      resourceType: "DocumentReference",
      id: "37140845-dc10-0e29-f5d5-6933fe88b1a6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:798aeb4d-8507-950c-67af-748af40986e0",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2021-04-02T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
        display: "PCP39516",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMjEtMDQtMDIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gY2F0aGV0ZXIgYWJsYXRpb24gb2YgdGlzc3VlIG9mIGhlYXJ0Ci0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
        ],
        period: {
          start: "2021-04-02T02:40:58-04:00",
          end: "2021-04-02T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:84da70d6-73b0-636c-0683-daf3675e3603",
    resource: {
      resourceType: "DocumentReference",
      id: "84da70d6-73b0-636c-0683-daf3675e3603",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:e9efbb33-3b66-b9f2-d36a-c88d572204fc",
        },
      ],
      status: "superseded",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2021-04-09T02:40:58.908-04:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMjEtMDQtMDkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IHNhcnMtY292LTIgKGNvdmlkLTE5KSB2YWNjaW5lLCBtcm5hLCBzcGlrZSBwcm90ZWluLCBsbnAsIHByZXNlcnZhdGl2ZSBmcmVlLCAxMDAgbWNnLzAuNW1sIGRvc2UuIAo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:001e2916-2a73-95a5-7171-7e4d8ca549c8" },
        ],
        period: {
          start: "2021-04-09T02:40:58-04:00",
          end: "2021-04-09T02:55:58-04:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
  {
    fullUrl: "urn:uuid:1e50d48a-c2ac-364f-2549-52beb7580621",
    resource: {
      resourceType: "DocumentReference",
      id: "1e50d48a-c2ac-364f-2549-52beb7580621",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference",
        ],
      },
      identifier: [
        {
          system: "urn:ietf:rfc:3986",
          value: "urn:uuid:8f241f9a-577f-b862-19f0-9e6e4a3631a3",
        },
      ],
      status: "current",
      type: {
        coding: [
          {
            system: "http://loinc.org",
            code: "34117-2",
            display: "History and physical note",
          },
          {
            system: "http://loinc.org",
            code: "51847-2",
            display: "Evaluation+Plan note",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
              code: "clinical-note",
              display: "Clinical Note",
            },
          ],
        },
      ],
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      date: "2021-11-18T01:40:58.908-05:00",
      author: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      custodian: {
        reference:
          "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
        display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
      },
      content: [
        {
          attachment: {
            contentType: "text/plain; charset=utf-8",
            data: "CjIwMjEtMTEtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
          },
          format: {
            system: "http://ihe.net/fhir/ValueSet/IHE.FormatCode.codesystem",
            code: "urn:ihe:iti:xds:2017:mimeTypeSufficient",
            display: "mimeType Sufficient",
          },
        },
      ],
      context: {
        encounter: [
          { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
        ],
        period: {
          start: "2021-11-18T01:40:58-05:00",
          end: "2021-11-18T01:55:58-05:00",
        },
      },
    },
    request: { method: "POST", url: "DocumentReference" },
  },
];

export default entities;
