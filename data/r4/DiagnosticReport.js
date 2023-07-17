const entities = [
  {
    fullUrl: "urn:uuid:200273f7-8c62-94e1-c340-e99cf9f078ad",
    resource: {
      resourceType: "DiagnosticReport",
      id: "200273f7-8c62-94e1-c340-e99cf9f078ad",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e8bc0159-8b0b-8ff7-b614-85a6a650cb26" },
      effectiveDateTime: "1944-04-23T02:40:58-04:00",
      issued: "1944-04-23T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NDQtMDQtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNSB5ZWFyLW9sZCBub24taGlzcGFuaWMgd2hpdGUgbWFsZS4KCiMgU29jaWFsIEhpc3RvcnkKIFBhdGllbnQgcXVpdGUgc21va2luZyBhdCBhZ2UgMjAgYW5kIGlzIGFuIGFsY29ob2xpYy4KCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KClBhdGllbnQgY3VycmVudGx5IGhhcyBCbHVlIENyb3NzIEJsdWUgU2hpZWxkLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpObyBBY3RpdmUgTWVkaWNhdGlvbnMuCgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcGxhY2VkIG9uIGEgY2FyZXBsYW46Ci0gbXVzY3Vsb3NrZWxldGFsIGNhcmUK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b482983d-a2d4-09ed-4b1f-d0d2d6dbb793",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b482983d-a2d4-09ed-4b1f-d0d2d6dbb793",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e1f0cb6f-8192-04eb-72db-7c5c3eceef2d" },
      effectiveDateTime: "1955-11-18T01:40:58-05:00",
      issued: "1955-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NTUtMTEtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMTcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuCgojIFNvY2lhbCBIaXN0b3J5CiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KClBhdGllbnQgY3VycmVudGx5IGhhcyBBbnRoZW0uCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6472afd6-d965-16ee-5439-78739cbfe85f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6472afd6-d965-16ee-5439-78739cbfe85f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a63bab0b-bfa7-02f8-a81f-d134e8abae49" },
      effectiveDateTime: "1956-11-23T01:40:58-05:00",
      issued: "1956-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NTYtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMTggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBZXRuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIHJlY2VpdmVkIGNlcnRpZmljYXRlIG9mIGhpZ2ggc2Nob29sIGVxdWl2YWxlbmN5IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KCg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:ee59392a-816f-964d-45e5-f35926b3ee88",
    resource: {
      resourceType: "DiagnosticReport",
      id: "ee59392a-816f-964d-45e5-f35926b3ee88",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ffe7916d-32bf-fd09-5444-3af0a42357ad" },
      effectiveDateTime: "1957-11-29T01:40:58-05:00",
      issued: "1957-11-29T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NTctMTEtMjkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMTkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e8b32bb4-e526-8af1-563c-89226b0325e2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e8b32bb4-e526-8af1-563c-89226b0325e2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ab1b44a8-e592-358e-c82b-2ad93e761853" },
      effectiveDateTime: "1960-12-02T01:40:58-05:00",
      issued: "1960-12-02T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NjAtMTItMDIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMjIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEJsdWUgQ3Jvc3MgQmx1ZSBTaGllbGQuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7a74a663-b696-0aa9-0067-535ae6c09a3e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7a74a663-b696-0aa9-0067-535ae6c09a3e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:946b1ccf-b3fe-73e0-89fe-5c4eca918fbd" },
      effectiveDateTime: "1963-12-06T01:40:58-05:00",
      issued: "1963-12-06T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NjMtMTItMDYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMjUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cc81865f-4fb0-df6b-cbd3-76e4d528a22d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cc81865f-4fb0-df6b-cbd3-76e4d528a22d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a13656cd-5139-6065-fb02-e396ade6da0f" },
      effectiveDateTime: "1966-12-09T01:40:58-05:00",
      issued: "1966-12-09T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NjYtMTItMDkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMjggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:48f10e7c-d49b-d8cb-b37b-d773c1b44c85",
    resource: {
      resourceType: "DiagnosticReport",
      id: "48f10e7c-d49b-d8cb-b37b-d773c1b44c85",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:c3c7e2bb-ffc3-a8a8-c1aa-5d4849c89735" },
      effectiveDateTime: "1969-12-12T01:40:58-05:00",
      issued: "1969-12-12T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NjktMTItMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMzEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiByaXNrIGFjdGl2aXR5IGludm9sdmVtZW50IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCByZWNlaXZlZCBjZXJ0aWZpY2F0ZSBvZiBoaWdoIHNjaG9vbCBlcXVpdmFsZW5jeSAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFldG5hLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpObyBBY3RpdmUgTWVkaWNhdGlvbnMuCgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KCg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:35c3decb-b985-2d87-8636-9b0f673f5de2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "35c3decb-b985-2d87-8636-9b0f673f5de2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:78d2eb6e-cb2c-b0d9-eef1-81ced734b85d" },
      effectiveDateTime: "1972-12-15T01:40:58-05:00",
      issued: "1972-12-15T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NzItMTItMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMzQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFudGhlbS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1cba3c0d-671d-ecfe-ac63-7d917446de20",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1cba3c0d-671d-ecfe-ac63-7d917446de20",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a195ade9-6085-554c-a315-88ec3974dd78" },
      effectiveDateTime: "1975-12-19T01:40:58-05:00",
      issued: "1975-12-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NzUtMTItMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgMzcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFudGhlbS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f138a734-670b-80b2-7098-f42bc48635e4",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f138a734-670b-80b2-7098-f42bc48635e4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f3d0a0e4-3218-bbf7-717e-5d326d1b42bf" },
      effectiveDateTime: "1978-10-06T02:40:58-04:00",
      issued: "1978-10-06T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5NzgtMTAtMDYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5c68c4e9-c7e7-3dcb-522e-20e2f078dc12",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5c68c4e9-c7e7-3dcb-522e-20e2f078dc12",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:07ffec4d-5141-35f6-44fb-9f88c1223e2a" },
      effectiveDateTime: "1982-10-15T02:40:58-04:00",
      issued: "1982-10-15T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5ODItMTAtMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGJvZHkgbWFzcyBpbmRleCAzMCsgLSBvYmVzaXR5IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2baf9f1e-e5b8-3912-fb5a-46af2862b12e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2baf9f1e-e5b8-3912-fb5a-46af2862b12e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:d58530c3-bf6f-3109-beb2-7aace8344cf9" },
      effectiveDateTime: "1985-02-23T01:40:58-05:00",
      issued: "1985-02-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5ODUtMDItMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBvc3Rlb2FydGhyaXRpcyBvZiBoaXAuIAoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBuYXByb3hlbiBzb2RpdW0gMjIwIG1nIG9yYWwgdGFibGV0ClRoZSBwYXRpZW50IHdhcyBwbGFjZWQgb24gYSBjYXJlcGxhbjoKLSBtdXNjdWxvc2tlbGV0YWwgY2FyZQo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6dd05fe6-6884-099a-53a5-fc717fd09f0e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6dd05fe6-6884-099a-53a5-fc717fd09f0e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:cc78a557-b4d0-642f-fa8e-70a154f184e8" },
      effectiveDateTime: "1986-10-24T02:40:58-04:00",
      issued: "1986-10-24T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5ODYtMTAtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNDggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:87c94ad5-ab2d-af4b-0df8-792c7d18faa6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "87c94ad5-ab2d-af4b-0df8-792c7d18faa6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a6f0d27d-801a-0af6-5be2-8e9ef2930c1e" },
      effectiveDateTime: "1988-09-30T02:40:58-04:00",
      issued: "1988-09-30T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5ODgtMDktMzAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b7c3ee60-0dae-b975-10c1-91eaca74a542",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b7c3ee60-0dae-b975-10c1-91eaca74a542",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b82c0a84-cd96-d86d-5812-c73e3794af9c" },
      effectiveDateTime: "1990-10-12T02:40:58-04:00",
      issued: "1990-10-12T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTAtMTAtMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEJsdWUgQ3Jvc3MgQmx1ZSBTaGllbGQuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1142850f-bf19-901c-4e0b-ff65734d2a7e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1142850f-bf19-901c-4e0b-ff65734d2a7e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:baf9d9d4-62ba-4e7b-0e8f-ca4409adc107" },
      effectiveDateTime: "1991-10-18T02:40:58-04:00",
      issued: "1991-10-18T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTEtMTAtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEFldG5hLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpObyBBY3RpdmUgTWVkaWNhdGlvbnMuCgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBoYXMgYSBjcmltaW5hbCByZWNvcmQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KCg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cb59c2f2-4ba8-7377-b074-59eed11c1be2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cb59c2f2-4ba8-7377-b074-59eed11c1be2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:cf267831-5a5f-01b0-79f9-3e84a5c9ef4c" },
      effectiveDateTime: "1993-10-29T02:40:58-04:00",
      issued: "1993-10-29T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTMtMTAtMjkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKTm8gQWN0aXZlIE1lZGljYXRpb25zLgoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e139d56d-e1fb-bf50-ea2f-d6408f6f40b5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e139d56d-e1fb-bf50-ea2f-d6408f6f40b5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:dd53132e-bce0-5363-1a6d-29ec0933cfc6" },
      effectiveDateTime: "1994-11-04T01:40:58-05:00",
      issued: "1994-11-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTQtMTEtMDQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBoeXBlcmxpcGlkZW1pYS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:57e8b5bf-3c99-c61b-b4bd-569eee163240",
    resource: {
      resourceType: "DiagnosticReport",
      id: "57e8b5bf-3c99-c61b-b4bd-569eee163240",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0d452394-2b0c-1f9e-da52-1af68a0bb062" },
      effectiveDateTime: "1994-11-25T01:40:58-05:00",
      issued: "1994-11-25T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTQtMTEtMjUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCk5vIEFjdGl2ZSBNZWRpY2F0aW9ucy4KCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKVGhlIHBhdGllbnQgd2FzIHBsYWNlZCBvbiBhIGNhcmVwbGFuOgotIGh5cGVybGlwaWRlbWlhIGNsaW5pY2FsIG1hbmFnZW1lbnQgcGxhbgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:86833a3d-c80a-9c17-0c83-e81825e6ce58",
    resource: {
      resourceType: "DiagnosticReport",
      id: "86833a3d-c80a-9c17-0c83-e81825e6ce58",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:1b75fab2-0e5e-8169-a796-be72bd4d5bcd" },
      effectiveDateTime: "1995-11-10T01:40:58-05:00",
      issued: "1995-11-10T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTUtMTEtMTAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0ff5e7ef-771e-7f83-4ae2-5bc965028df8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0ff5e7ef-771e-7f83-4ae2-5bc965028df8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:965abeb3-4174-d8ba-9515-a7b3e83d9172" },
      effectiveDateTime: "1995-11-25T01:40:58-05:00",
      issued: "1995-11-25T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTUtMTEtMjUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIEh1bWFuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fb9ad0f9-29cc-f6d1-5ad8-23204d2ada24",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fb9ad0f9-29cc-f6d1-5ad8-23204d2ada24",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:718fa39f-ba82-2900-67fa-3dba15c61ffa" },
      effectiveDateTime: "1996-11-15T01:40:58-05:00",
      issued: "1996-11-15T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTYtMTEtMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:eba75a9f-b79e-41f9-d35b-598a2ef34517",
    resource: {
      resourceType: "DiagnosticReport",
      id: "eba75a9f-b79e-41f9-d35b-598a2ef34517",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:2333b1cd-ad09-3073-0696-ee9c140737b6" },
      effectiveDateTime: "1996-11-24T01:40:58-05:00",
      issued: "1996-11-24T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTYtMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIENpZ25hIEhlYWx0aC4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e36603ec-b82c-f09e-e4c2-0701f32ae5bf",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e36603ec-b82c-f09e-e4c2-0701f32ae5bf",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:495d60aa-d26c-964a-ea81-a109ea280cad" },
      effectiveDateTime: "1997-11-24T01:40:58-05:00",
      issued: "1997-11-24T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTctMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNTkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:dc4db679-3448-1519-71e9-3533e93df3c0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "dc4db679-3448-1519-71e9-3533e93df3c0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9bec8f7b-081f-26e5-22ad-290ec7e5fa28" },
      effectiveDateTime: "1998-11-24T01:40:58-05:00",
      issued: "1998-11-24T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTgtMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuCgojIFNvY2lhbCBIaXN0b3J5ClBhdGllbnQgaXMgbWFycmllZC4gUGF0aWVudCBpcyBhbiBhY3RpdmUgc21va2VyIGFuZCBpcyBhbiBhbGNvaG9saWMuCiBQYXRpZW50IGlkZW50aWZpZXMgYXMgaGV0ZXJvc2V4dWFsLgoKUGF0aWVudCBjb21lcyBmcm9tIGEgaGlnaCBzb2Npb2Vjb25vbWljIGJhY2tncm91bmQuCiBQYXRpZW50IGhhcyBhIGhpZ2ggc2Nob29sIGVkdWNhdGlvbi4KUGF0aWVudCBjdXJyZW50bHkgaGFzIFVuaXRlZEhlYWx0aGNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKS4gCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIHNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e9d8777b-45bc-329c-3fcd-7293a461f9a3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e9d8777b-45bc-329c-3fcd-7293a461f9a3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:1478d811-530a-72f3-d291-2bbdea8a5fde" },
      effectiveDateTime: "1999-11-24T01:40:58-05:00",
      issued: "1999-11-24T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTktMTEtMjQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBZXRuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:25ed837e-ea1d-fbb2-471a-5f32b68e6668",
    resource: {
      resourceType: "DiagnosticReport",
      id: "25ed837e-ea1d-fbb2-471a-5f32b68e6668",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:784cf40a-63a4-811c-7a48-76166a7532df" },
      effectiveDateTime: "1999-12-03T01:40:58-05:00",
      issued: "1999-12-03T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjE5OTktMTItMDMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBZXRuYS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c092dbb7-3a48-1928-e9b1-1eb6922e2e9f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c092dbb7-3a48-1928-e9b1-1eb6922e2e9f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:07b6f41f-e852-a015-9767-7bc44503fb3e" },
      effectiveDateTime: "2000-11-23T01:40:58-05:00",
      issued: "2000-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDAtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBBbnRoZW0uCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIHNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:98e190e4-1ad8-6edd-dab9-ca7a023a55ca",
    resource: {
      resourceType: "DiagnosticReport",
      id: "98e190e4-1ad8-6edd-dab9-ca7a023a55ca",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:2f8bd24b-1c19-084c-3350-c62c7b9c9ace" },
      effectiveDateTime: "2001-11-23T01:40:58-05:00",
      issued: "2001-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDEtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBVbml0ZWRIZWFsdGhjYXJlLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:06d8a3f1-27a2-ea32-5858-3a8a5c879b79",
    resource: {
      resourceType: "DiagnosticReport",
      id: "06d8a3f1-27a2-ea32-5858-3a8a5c879b79",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:67eace0b-9f1e-5b52-0c1f-4c1b91626ca0" },
      effectiveDateTime: "2001-12-14T01:40:58-05:00",
      issued: "2001-12-14T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDEtMTItMTQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBVbml0ZWRIZWFsdGhjYXJlLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuCgo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:38d9dd19-f6a7-5f5d-1bb5-439bf6ef89d8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "38d9dd19-f6a7-5f5d-1bb5-439bf6ef89d8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0065e2e0-f9e1-13d2-7a75-8bad676cb53e" },
      effectiveDateTime: "2002-11-23T01:40:58-05:00",
      issued: "2002-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDItMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBCbHVlIENyb3NzIEJsdWUgU2hpZWxkLgoKIyBBbGxlcmdpZXMKTm8gS25vd24gQWxsZXJnaWVzLgoKIyBNZWRpY2F0aW9ucwpzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8c7f95e6-32f5-6679-3d96-44275802a2d6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8c7f95e6-32f5-6679-3d96-44275802a2d6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:1b000b85-ccb2-85e5-4228-caa08544105a" },
      effectiveDateTime: "2003-11-23T01:40:58-05:00",
      issued: "2003-11-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDMtMTEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:47e6d848-3a7d-9134-3eb7-b19e9d400cd2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "47e6d848-3a7d-9134-3eb7-b19e9d400cd2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:6c46bd34-4e70-4fed-1b47-d0bc19abebf8" },
      effectiveDateTime: "2003-12-26T01:40:58-05:00",
      issued: "2003-12-26T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDMtMTItMjYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1f303571-d426-f8b5-00a9-2d9dae3bdf2f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1f303571-d426-f8b5-00a9-2d9dae3bdf2f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bb71b8f5-15d4-337a-ab7f-310698989b95" },
      effectiveDateTime: "2004-11-22T01:40:58-05:00",
      issued: "2004-11-22T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDQtMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e9486dd8-1928-9ce0-4f14-34ef5ddfcb80",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e9486dd8-1928-9ce0-4f14-34ef5ddfcb80",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:55eb54d4-94a2-35f9-5396-a3184da89585" },
      effectiveDateTime: "2004-12-31T01:40:58-05:00",
      issued: "2004-12-31T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDQtMTItMzEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5b887626-57dd-0c44-9e04-2d7998fd8946",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5b887626-57dd-0c44-9e04-2d7998fd8946",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:09103c57-d806-a5b3-bce1-e27a4311cd46" },
      effectiveDateTime: "2005-11-22T01:40:58-05:00",
      issued: "2005-11-22T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDUtMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:17c9aed2-4a0b-346d-b20f-67b3e91010ab",
    resource: {
      resourceType: "DiagnosticReport",
      id: "17c9aed2-4a0b-346d-b20f-67b3e91010ab",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:54ff763b-773d-17d9-5010-291d2e62dc59" },
      effectiveDateTime: "2006-11-22T01:40:58-05:00",
      issued: "2006-11-22T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDYtMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b8febae5-48ac-67de-7edc-486cb2dbbd44",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b8febae5-48ac-67de-7edc-486cb2dbbd44",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e8bc1e87-0c82-b107-3fa9-8ac889079795" },
      effectiveDateTime: "2007-01-12T01:40:58-05:00",
      issued: "2007-01-12T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDctMDEtMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8793c66a-0ee4-8930-025a-5c64b5d7dbec",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8793c66a-0ee4-8930-025a-5c64b5d7dbec",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:fcbad825-7d87-65a6-6edb-457d75cb4909" },
      effectiveDateTime: "2007-11-22T01:40:58-05:00",
      issued: "2007-11-22T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDctMTEtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNjkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0b03f288-c2ff-f003-994f-8e191170d890",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0b03f288-c2ff-f003-994f-8e191170d890",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9afd5dd5-5d49-fbfd-8de1-467729f031df" },
      effectiveDateTime: "2008-11-21T01:40:58-05:00",
      issued: "2008-11-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDgtMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:58d4da2d-9227-7398-5737-67896ea20749",
    resource: {
      resourceType: "DiagnosticReport",
      id: "58d4da2d-9227-7398-5737-67896ea20749",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a741082d-de56-2dcc-c2bc-9e2d734cec10" },
      effectiveDateTime: "2009-01-23T01:40:58-05:00",
      issued: "2009-01-23T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDktMDEtMjMKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:69bd9536-c160-9805-eb3b-41e737369c18",
    resource: {
      resourceType: "DiagnosticReport",
      id: "69bd9536-c160-9805-eb3b-41e737369c18",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32805baa-8f71-da8d-4b1a-6661022b0270" },
      effectiveDateTime: "2009-11-21T01:40:58-05:00",
      issued: "2009-11-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMDktMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:617e192a-1e80-e733-0100-5e43f1539962",
    resource: {
      resourceType: "DiagnosticReport",
      id: "617e192a-1e80-e733-0100-5e43f1539962",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e0df8625-5bef-8d32-c0cf-80ddea40b2bd" },
      effectiveDateTime: "2010-11-21T01:40:58-05:00",
      issued: "2010-11-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTAtMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d679d3a2-5a6e-a7a9-b99f-3e1b7c71caf7",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d679d3a2-5a6e-a7a9-b99f-3e1b7c71caf7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:e1c4709a-b1a2-d143-3564-eafbc2cfa0b9" },
      effectiveDateTime: "2011-02-04T01:40:58-05:00",
      issued: "2011-02-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTEtMDItMDQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0265c1eb-c640-7b0f-3713-46cb1eb2fd5e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0265c1eb-c640-7b0f-3713-46cb1eb2fd5e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7b15ad1a-24c8-0d45-c32f-9941233f3e20" },
      effectiveDateTime: "2011-11-21T01:40:58-05:00",
      issued: "2011-11-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTEtMTEtMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:9f3556d2-79ff-6bd1-dccf-dfe581e9e0ab",
    resource: {
      resourceType: "DiagnosticReport",
      id: "9f3556d2-79ff-6bd1-dccf-dfe581e9e0ab",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T02:55:11-05:00",
      issued: "2012-02-10T02:55:11.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:d279bb87-4bb6-075e-871c-28dca332bb5c",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:69ec984a-dc95-9a53-ad4d-9cbbbc5c8a79",
    resource: {
      resourceType: "DiagnosticReport",
      id: "69ec984a-dc95-9a53-ad4d-9cbbbc5c8a79",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:96b068cb-4f56-3b06-1647-055c4925a1c7" },
      effectiveDateTime: "2012-02-10T01:40:58-05:00",
      issued: "2012-02-10T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTItMDItMTAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLiAKCiMjIFBsYW4KUGF0aWVudCB3YXMgZ2l2ZW4gdGhlIGZvbGxvd2luZyBpbW11bml6YXRpb25zOiBpbmZsdWVuemEsIHNlYXNvbmFsLCBpbmplY3RhYmxlLCBwcmVzZXJ2YXRpdmUgZnJlZS4gClRoZSBmb2xsb3dpbmcgcHJvY2VkdXJlcyB3ZXJlIGNvbmR1Y3RlZDoKLSBhc3Nlc3NtZW50IG9mIGhlYWx0aCBhbmQgc29jaWFsIGNhcmUgbmVlZHMgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IG9mIHN1YnN0YW5jZSB1c2UgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IHVzaW5nIGFsY29ob2wgdXNlIGRpc29yZGVycyBpZGVudGlmaWNhdGlvbiB0ZXN0IC0gY29uc3VtcHRpb24gKHByb2NlZHVyZSkK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4d5f6a8d-9aec-bbf7-00c2-bad1b00cc49a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4d5f6a8d-9aec-bbf7-00c2-bad1b00cc49a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:5b0efda9-2d33-ae96-8122-f8136998b925",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:f345d7ee-7cc8-9beb-3f16-2fb7e9cf7d09",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:893a3c86-5401-b41e-d152-98e201c45051",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:702e27e6-7b44-91c4-a4d0-c6aa6c12ffc7",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:f28c554a-f799-a780-92eb-7e04576a5aeb",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:e8f09834-e888-8e60-42ca-ee53b67842f6",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:26d7d914-fa00-5686-f0f2-5f4698d9261b",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:1c06a944-42e1-be0a-af9a-67dfbd6d6b0f",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:7730a236-c1bb-721f-ea8f-02d0d39b90cc",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:985a03f1-6fa6-be74-1cea-140bec2e0690",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:8b1046b8-0735-4edc-db78-339847e8002b",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:592d940a-f946-e730-551e-d1a861dcca7a",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:49a65ad1-95a8-3573-4078-07e7ea49642e",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:fb1f72d6-87ca-2237-7c49-ac198c685ed2",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:e2fe8374-72f3-4340-e4c2-77e13ab44c0b",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:268da18d-9b43-5466-92c1-59dd498d3b20",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:1f1b565e-1e8c-0f09-d6d6-e343ad9badc2",
    resource: {
      resourceType: "DiagnosticReport",
      id: "1f1b565e-1e8c-0f09-d6d6-e343ad9badc2",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:cfe658c1-2bfa-dabf-c218-43f68c7a0abc",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:4ae793dc-3df7-55fd-68fd-0afcae8692f3",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:d2bd188f-5576-a413-62f0-2b7016cbeb82",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:edb68a62-9a3a-7b1e-4d8a-879c5740525a",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:78e05b6f-6f1a-9b7f-ec4c-25ed39e3e53f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "78e05b6f-6f1a-9b7f-ec4c-25ed39e3e53f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:bc5405d8-f0f0-396d-a6a8-f966daac53c8" },
      effectiveDateTime: "2012-11-20T01:40:58-05:00",
      issued: "2012-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTItMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5fc3b6de-f6b9-f291-5437-8f396320fd3d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5fc3b6de-f6b9-f291-5437-8f396320fd3d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:4a7fcfc9-d415-3d7a-8ffb-807348d747ff",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:30f1678d-c013-6d7f-6dc4-7956777a76ba",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:a7c75832-8fe4-af42-21ac-6ff57c38b5d8",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:dcfd31d7-2e36-a57e-baa6-19eac7c2891b",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2265d604-20b3-c373-6ad0-6e2892251a0f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2265d604-20b3-c373-6ad0-6e2892251a0f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T02:57:57-05:00",
      issued: "2013-02-15T02:57:57.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:12cabf2a-8b3e-cf49-aa95-ba56d9b222d9",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:d715141d-f296-d8a6-f48e-eaa761d37956",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b326b532-76ef-5e12-c25d-1b99b8c2b1ed",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b326b532-76ef-5e12-c25d-1b99b8c2b1ed",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T03:29:15-05:00",
      issued: "2013-02-15T03:29:15.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:d8a7514e-cd25-0b94-b733-91ee707bdf87",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:7b39c955-709d-0b5c-ff3d-56128d0e76b9",
    resource: {
      resourceType: "DiagnosticReport",
      id: "7b39c955-709d-0b5c-ff3d-56128d0e76b9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ebb1d3b8-76e9-e4b5-b4c1-936f3f8b71c6" },
      effectiveDateTime: "2013-02-15T01:40:58-05:00",
      issued: "2013-02-15T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTMtMDItMTUKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzQgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZykuIAoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IGluZmx1ZW56YSwgc2Vhc29uYWwsIGluamVjdGFibGUsIHByZXNlcnZhdGl2ZSBmcmVlLiAKVGhlIGZvbGxvd2luZyBwcm9jZWR1cmVzIHdlcmUgY29uZHVjdGVkOgotIGFzc2Vzc21lbnQgb2YgaGVhbHRoIGFuZCBzb2NpYWwgY2FyZSBuZWVkcyAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:13dff6b6-5365-7618-2dcf-f5665d833292",
    resource: {
      resourceType: "DiagnosticReport",
      id: "13dff6b6-5365-7618-2dcf-f5665d833292",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:7f17e90d-632f-1304-1ddb-2c99f43257b7",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:5444cd41-a09e-0984-bea9-40d00fd7cd1e",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:8faafa19-0bc7-927d-965f-205f02846bfb",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:41729168-591b-d27f-b238-99cb64d24fa1",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:b293ce4d-bb8a-b4f0-2180-a24ae4e07fc2",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:62390a66-bbdc-db30-3a79-802910a46e34",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:4a1f623a-5c89-d9fe-a7ec-c64bbcaf0cf7",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:75f8acf6-04ea-6919-c786-f5129f1ec077",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:aac8bb5e-2b6b-692a-1f0b-d462a247b20d",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:5c6311ff-9150-e3e1-59ad-db03633046cb",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:cfcd92ac-59e6-6a5d-58a4-37264d97be78",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:0c9fc924-3cec-75d0-3fc0-4c491e193ed9",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:1cbdcf10-4ee8-ae62-f17c-ba3f135dcf32",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:3c48fb34-43f9-3c56-630d-41895574080c",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:a28fcfe3-f929-876b-6198-18eaae8c7b37",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:cb69dcb6-6749-0884-7336-883b76c61812",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:89203d5b-c747-b2a8-839e-23c614531569",
    resource: {
      resourceType: "DiagnosticReport",
      id: "89203d5b-c747-b2a8-839e-23c614531569",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:e6038778-bf2b-118a-29e3-dc7aeda61009",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:c5e8f066-4c40-af91-915f-092a4b8aff5e",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:545e6595-35ec-0b39-fc74-8ad5c4235e2c",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:ae0819b2-53fe-eb56-cf6b-5ef5eceb7da9",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e62b9b07-d85b-0cad-c426-aecb2d87f971",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e62b9b07-d85b-0cad-c426-aecb2d87f971",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:32696af4-10b2-4c61-e239-4ee45233f350" },
      effectiveDateTime: "2013-11-20T01:40:58-05:00",
      issued: "2013-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTMtMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cd712de4-4555-5923-9891-8e7a0cfc2331",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cd712de4-4555-5923-9891-8e7a0cfc2331",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a1aa9e96-e503-95ca-5897-96581cf9dcf5" },
      effectiveDateTime: "2014-02-02T01:40:58-05:00",
      issued: "2014-02-02T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTQtMDItMDIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBjaHJvbmljIGxvdyBiYWNrIHBhaW4gKGZpbmRpbmcpLCBmaWJyb215YWxnaWEgKGRpc29yZGVyKS4gCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:682da361-4bbd-017d-b579-ecd04f833242",
    resource: {
      resourceType: "DiagnosticReport",
      id: "682da361-4bbd-017d-b579-ecd04f833242",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T02:51:43-05:00",
      issued: "2014-02-21T02:51:43.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:36e1273c-772b-9c27-8b37-4396b9275a7a",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:0d2097c3-a084-a627-dc8d-459084afd58a",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:053b012b-f251-01dc-a304-8b811bca6545",
    resource: {
      resourceType: "DiagnosticReport",
      id: "053b012b-f251-01dc-a304-8b811bca6545",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T03:25:06-05:00",
      issued: "2014-02-21T03:25:06.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:8f8a66d6-4ea5-62d2-c472-a56665bc26f7",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:10216489-00a4-1754-3a32-627667f410f9",
    resource: {
      resourceType: "DiagnosticReport",
      id: "10216489-00a4-1754-3a32-627667f410f9",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:47df21fa-5b2c-7b3d-f7c9-05a1cc68c26b" },
      effectiveDateTime: "2014-02-21T01:40:58-05:00",
      issued: "2014-02-21T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTQtMDItMjEKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBsaW1pdGVkIHNvY2lhbCBjb250YWN0IChmaW5kaW5nKSwgbm90IGluIGxhYm9yIGZvcmNlIChmaW5kaW5nKSwgZnVsbC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggcGFydC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLCB2aWN0aW0gb2YgaW50aW1hdGUgcGFydG5lciBhYnVzZSAoZmluZGluZykuIAoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IGluZmx1ZW56YSwgc2Vhc29uYWwsIGluamVjdGFibGUsIHByZXNlcnZhdGl2ZSBmcmVlLiAKVGhlIGZvbGxvd2luZyBwcm9jZWR1cmVzIHdlcmUgY29uZHVjdGVkOgotIGFzc2Vzc21lbnQgb2YgaGVhbHRoIGFuZCBzb2NpYWwgY2FyZSBuZWVkcyAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4ad16258-6749-c57e-3a3e-fa4c176fc7bf",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4ad16258-6749-c57e-3a3e-fa4c176fc7bf",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7ea69efc-73a8-74a1-0595-d98e36d47dc2" },
      effectiveDateTime: "2014-03-27T05:40:58-04:00",
      issued: "2014-03-27T05:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTQtMDMtMjcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzUgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF0KVGhlIHBhdGllbnQgd2FzIHBsYWNlZCBvbiBhIGNhcmVwbGFuOgotIHRoZXJhcHkgKHJlZ2ltZS90aGVyYXB5KQo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b5c04fce-0508-1064-861e-cb6e81a0d1c3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b5c04fce-0508-1064-861e-cb6e81a0d1c3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:ce7bec28-fbf6-b090-38dd-3571f196defc",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:a21b979b-97ef-2c88-4965-b522842f70db",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:892639ed-f635-0092-d5a1-617ef95ca613",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:c6fad787-0d15-d55e-ce70-9de6dc651d4b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:e36b6e64-494c-e2d1-d5d3-eb9d9aef274b",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:b4993406-5562-88e3-b02c-dae1acaf647a",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:d3823eac-13f2-12ca-9e74-7940712536a1",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:2c240dc3-67e6-0858-9139-d12381060af5",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:c059a59d-5bdd-b1a1-b650-4eaf7b84c053",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:73d33261-47f4-b0e0-793f-1dcd56b2adcd",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:eaf06641-d54f-d69a-55ff-d585320c0d64",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:bd2606f2-af60-9403-17ac-0492e319cf17",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:b92a5e5a-7602-afa1-5e9e-73337a2f181c",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:f4ab8283-1fae-202f-bc86-2e3ee0e8f26d",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:460da8d6-9a31-31c3-d636-af7c497af085",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:73def88c-a905-5932-dbe1-b730453bc96b",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:3b7c4f0f-6d14-529d-ca2b-0427f5c950cc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "3b7c4f0f-6d14-529d-ca2b-0427f5c950cc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:6e91905e-f493-59b3-2e1c-aaf71e9130ef",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:d4e3b381-0be1-a0c2-29dc-8dd61e8a7033",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:8d6951cd-fc71-fc46-24b0-e5901d6d826c",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:97295f43-b8c2-0ef5-7e37-21378772b9ea",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fd3ff796-8a89-98ce-d9cc-adb083d7f417",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fd3ff796-8a89-98ce-d9cc-adb083d7f417",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:b3dc260b-475f-e086-d36a-d51e7fb276a2" },
      effectiveDateTime: "2014-11-20T01:40:58-05:00",
      issued: "2014-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTQtMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF07IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIHNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c1c815b7-810f-e9b4-b1d4-1f8323be60a3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c1c815b7-810f-e9b4-b1d4-1f8323be60a3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:dc2fc493-9d4f-4ada-91d2-9e81690a983d" },
      effectiveDateTime: "2015-01-07T05:10:52-05:00",
      issued: "2015-01-07T05:10:52.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTUtMDEtMDcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF07IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KCgojIyBQbGFuCgpUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gY29sb25vc2NvcHkK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f2712904-a7f4-1cbb-d400-6e362628ac1c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f2712904-a7f4-1cbb-d400-6e362628ac1c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T03:13:28-05:00",
      issued: "2015-02-27T03:13:28.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:7fed8b09-5924-2c83-5c64-5dac5cbc7469",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c3aba152-7254-b0fd-7059-7c2c67837c42",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c3aba152-7254-b0fd-7059-7c2c67837c42",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T03:49:08-05:00",
      issued: "2015-02-27T03:49:08.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:bce6bb79-f114-0992-0680-e1b34b960c42",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f1c4a06e-63d4-77b7-b283-a4a3337bff6c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f1c4a06e-63d4-77b7-b283-a4a3337bff6c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a244bb2d-a790-fea8-3e20-cf51bccdeabe" },
      effectiveDateTime: "2015-02-27T01:40:58-05:00",
      issued: "2015-02-27T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTUtMDItMjcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzYgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCnNpbXZhc3RhdGluIDEwIG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF07IGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0CgojIEFzc2Vzc21lbnQgYW5kIFBsYW4KUGF0aWVudCBpcyBwcmVzZW50aW5nIHdpdGggYXRyaWFsIGZpYnJpbGxhdGlvbiwgcGFydC10aW1lIGVtcGxveW1lbnQgKGZpbmRpbmcpLiAKCiMjIFBsYW4KUGF0aWVudCB3YXMgZ2l2ZW4gdGhlIGZvbGxvd2luZyBpbW11bml6YXRpb25zOiBpbmZsdWVuemEsIHNlYXNvbmFsLCBpbmplY3RhYmxlLCBwcmVzZXJ2YXRpdmUgZnJlZS4gClRoZSBmb2xsb3dpbmcgcHJvY2VkdXJlcyB3ZXJlIGNvbmR1Y3RlZDoKLSBjYXRoZXRlciBhYmxhdGlvbiBvZiB0aXNzdWUgb2YgaGVhcnQKLSBhc3Nlc3NtZW50IG9mIGhlYWx0aCBhbmQgc29jaWFsIGNhcmUgbmVlZHMgKHByb2NlZHVyZSkKLSBkZXByZXNzaW9uIHNjcmVlbmluZyAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIHVzaW5nIHBhdGllbnQgaGVhbHRoIHF1ZXN0aW9ubmFpcmUgdHdvLWl0ZW0gc2NvcmUgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IG9mIHN1YnN0YW5jZSB1c2UgKHByb2NlZHVyZSkKLSBhc3Nlc3NtZW50IHVzaW5nIGFsY29ob2wgdXNlIGRpc29yZGVycyBpZGVudGlmaWNhdGlvbiB0ZXN0IC0gY29uc3VtcHRpb24gKHByb2NlZHVyZSkKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSB3YXJmYXJpbiBzb2RpdW0gNSBtZyBvcmFsIHRhYmxldAotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:3a0b8187-1b0a-4de4-74d4-fc0f582c61c6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "3a0b8187-1b0a-4de4-74d4-fc0f582c61c6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:4e7953f8-72d2-33bb-fef7-1160b692cfee",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:3374f3f5-0cfb-74fa-56bd-c50c24835fca",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:f706b823-04f7-223c-9abb-7b66873a2d1e",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:07827004-6248-470d-01b6-e446f70ff59a",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:e13c0cc7-0c1f-2064-8b0d-2f3e4b2ce206",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:1f3748b6-ab85-a108-0ec8-42309076bb3d",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:79e5d1f5-72a5-582e-bac9-45284dbeeb7c",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:4690ec66-2932-9e67-c0ef-9764f0f8cfdc",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:6266beee-7863-2cb8-c811-81b696c51e1c",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:2ef2bfdd-2e94-820a-691d-3a0e9f2762a4",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:964bf4a9-6628-bac4-280e-0c536c06dac6",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:1abaf8de-5a66-beb6-86ca-bc71f86c2f46",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:1b450050-9a94-e938-f3bf-75b83681d31c",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:83a8489a-f553-8f92-f056-db61d6750a78",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:9629adc5-46af-099e-319b-0e740db1de05",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:d75a563f-90b7-20ac-1880-bcca7cd47e71",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fde3b357-f5c8-6390-bd1b-1b133fa75fb0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fde3b357-f5c8-6390-bd1b-1b133fa75fb0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:0af7aa16-dae4-08a5-6ceb-8d6d7f4edc2d",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:c4770967-0e6f-4772-179c-7e281a697771",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:20f1f60d-d749-2e9e-d130-0659c632ac82",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:9a3ea4a0-d0b9-cb39-985b-130c4a600037",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d207cb9c-4f69-4689-7cc0-7aebc58e7467",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d207cb9c-4f69-4689-7cc0-7aebc58e7467",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:a7a95222-d6bc-be38-53e6-7afa40287e28" },
      effectiveDateTime: "2015-11-20T01:40:58-05:00",
      issued: "2015-11-20T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTUtMTEtMjAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6712bad1-160c-a7a8-5957-4e2f42078ac4",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6712bad1-160c-a7a8-5957-4e2f42078ac4",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:c8d07981-60fc-db10-e6c1-6dd07aef9611",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:ba2799e4-840d-1953-2ea0-a5ee8354a548",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:69d58e58-bc99-9858-699a-b8e1f630b07b",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:4b178257-bb4b-e90e-7294-ba02606ef95a",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:18717b01-9186-44f1-3aa9-50134046a2fa",
    resource: {
      resourceType: "DiagnosticReport",
      id: "18717b01-9186-44f1-3aa9-50134046a2fa",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:21eb5afd-ada4-5265-30f8-411bbbff7eff",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:1ecde5fd-cd13-0733-930a-3486a2c90078",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:c7b883d9-79d4-565b-6a1b-a0784a5a2382",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:0012c14b-bb9d-392b-3820-2f93bdbfc397",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:839f9408-cb17-e406-32db-18c5acc2ad2b",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:34b52ea9-8506-3d42-928c-9651e32f4931",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:df899fe2-44da-5e53-ee17-3a29a3edfce3",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:2a4db0f4-eef3-8328-be35-b38052db41c3",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:a772b768-dcb0-0bd5-c9ce-d99be9bab9dc",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:ac0f4dfc-bc6b-7471-efff-0fee0890c44d",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:232228da-4789-6741-8e4b-57662c625607",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:a090d8e0-7006-079b-f665-7549cd5f3140",
    resource: {
      resourceType: "DiagnosticReport",
      id: "a090d8e0-7006-079b-f665-7549cd5f3140",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T02:54:03-05:00",
      issued: "2016-03-04T02:54:03.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:56bccd4c-db9b-83f0-c9b7-47387e259ee4",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5c55692e-d9f5-f11e-2c6f-f1888168067a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5c55692e-d9f5-f11e-2c6f-f1888168067a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:4fa715e5-3406-05c2-d262-0f4ed0208723" },
      effectiveDateTime: "2016-03-04T01:40:58-05:00",
      issued: "2016-03-04T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTYtMDMtMDQKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzcgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHN0cmVzcyAoZmluZGluZykuIAoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IGluZmx1ZW56YSwgc2Vhc29uYWwsIGluamVjdGFibGUsIHByZXNlcnZhdGl2ZSBmcmVlLiAKVGhlIGZvbGxvd2luZyBwcm9jZWR1cmVzIHdlcmUgY29uZHVjdGVkOgotIGVsZWN0cmljYWwgY2FyZGlvdmVyc2lvbgotIGFzc2Vzc21lbnQgb2YgaGVhbHRoIGFuZCBzb2NpYWwgY2FyZSBuZWVkcyAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2701e7e6-09d7-82c7-ed48-2c4522d2594a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2701e7e6-09d7-82c7-ed48-2c4522d2594a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:ec8bb500-fabd-55c2-dafe-080eb8678082",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:ab99156a-783f-e57a-a399-ad6c6077223b",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:615cf710-3301-eee7-0419-72ad1c3b19c5",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:e0c85322-36a3-70a4-b322-df01a5925ef6",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:5e06fa85-d90f-e5d2-52a3-1c4639873b34",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:5a79120c-f13e-e03b-1b7c-f04cb0d3ea37",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:6a4b9de9-2d61-a0b9-ba0c-777f160a0312",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:d349d05b-64a7-51d8-b293-74a926d8ed73",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:f7e80fb0-2737-c8ba-827a-4a11d2efe729",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:fc24e76d-7e9e-f03b-0d7e-efccd7bc5de6",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:d2eb58c8-b7e1-4254-adac-7b4d450da146",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:5d653e5a-c113-f3c4-378b-0c3e7fb3310f",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:e163b712-94d9-b5ec-4aa1-32923cbb2bba",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:73eecc6d-f8cf-32fa-865d-21d8b64aa132",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:186cc7e5-7700-a84a-760d-45d4ca61cddb",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:06e4eba5-9834-4308-d0f5-0c4cd87a81d5",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2002e671-c754-bf5d-45ad-624f1465a03f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2002e671-c754-bf5d-45ad-624f1465a03f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:83e88284-836b-2319-af03-f8209d0f3881",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:dde87b34-f0b5-283b-8c82-519e4dfda443",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:dd6d02b1-e091-ed6a-f868-0813309fb289",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:5307d201-77db-9685-f747-98a466a24c0c",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:908ab929-e572-6b66-c75b-0a23091c7252",
    resource: {
      resourceType: "DiagnosticReport",
      id: "908ab929-e572-6b66-c75b-0a23091c7252",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:57fdd369-ad3a-bdc6-cbc2-d1fc5676b1d1" },
      effectiveDateTime: "2016-11-19T01:40:58-05:00",
      issued: "2016-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTYtMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgoKCiMjIFBsYW4KClRoZSBwYXRpZW50IHdhcyBwcmVzY3JpYmVkIHRoZSBmb2xsb3dpbmcgbWVkaWNhdGlvbnM6Ci0gc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5f728583-0a42-7752-75c0-b917e5cfa3a1",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5f728583-0a42-7752-75c0-b917e5cfa3a1",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "69737-5",
            display: "Generalized anxiety disorder 7 item (GAD-7)",
          },
        ],
        text: "Generalized anxiety disorder 7 item (GAD-7)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T02:51:14-05:00",
      issued: "2017-03-10T02:51:14.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:7417e47f-51d0-53ed-cab5-9da0b3532a7f",
          display:
            "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:45757376-3230-027c-0b57-9c269fa3fcd6",
    resource: {
      resourceType: "DiagnosticReport",
      id: "45757376-3230-027c-0b57-9c269fa3fcd6",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T03:14:38-05:00",
      issued: "2017-03-10T03:14:38.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:18ac32b1-281c-9a09-f619-67c48d3e4257",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:d85bac24-3be5-0bef-88fb-2c553af388b6",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:55eca7af-c665-9033-f55f-4f7e2befc2cd",
    resource: {
      resourceType: "DiagnosticReport",
      id: "55eca7af-c665-9033-f55f-4f7e2befc2cd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "76499-3",
            display: "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
          },
        ],
        text: "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T03:45:18-05:00",
      issued: "2017-03-10T03:45:18.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:33e29318-3495-f0e3-81fc-1ee31fb2672b",
          display: "Total score [HARK]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:dd7c06ed-5792-de80-1ddb-768669a9bade",
    resource: {
      resourceType: "DiagnosticReport",
      id: "dd7c06ed-5792-de80-1ddb-768669a9bade",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T04:17:19-05:00",
      issued: "2017-03-10T04:17:19.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:472240a4-12da-ad50-de90-39ca8418ba76",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b40b41aa-14d5-d90e-e5cb-e83eb299b86f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b40b41aa-14d5-d90e-e5cb-e83eb299b86f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:df4f2445-95a7-7929-498d-71905bfbb7ce" },
      effectiveDateTime: "2017-03-10T01:40:58-05:00",
      issued: "2017-03-10T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTctMDMtMTAKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHZpY3RpbSBvZiBpbnRpbWF0ZSBwYXJ0bmVyIGFidXNlIChmaW5kaW5nKSwgc3RyZXNzIChmaW5kaW5nKS4KCiMgU29jaWFsIEhpc3RvcnkKUGF0aWVudCBpcyBtYXJyaWVkLiBQYXRpZW50IGlzIGFuIGFjdGl2ZSBzbW9rZXIgYW5kIGlzIGFuIGFsY29ob2xpYy4KIFBhdGllbnQgaWRlbnRpZmllcyBhcyBoZXRlcm9zZXh1YWwuCgpQYXRpZW50IGNvbWVzIGZyb20gYSBoaWdoIHNvY2lvZWNvbm9taWMgYmFja2dyb3VuZC4KIFBhdGllbnQgaGFzIGEgaGlnaCBzY2hvb2wgZWR1Y2F0aW9uLgpQYXRpZW50IGN1cnJlbnRseSBoYXMgTWVkaWNhcmUuCgojIEFsbGVyZ2llcwpObyBLbm93biBBbGxlcmdpZXMuCgojIE1lZGljYXRpb25zCndhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0OyB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZzsgc2ltdmFzdGF0aW4gMTAgbWcgb3JhbCB0YWJsZXQ7IGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XTsgZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMDAgbWcgLyBoeWRyb2NvZG9uZSBiaXRhcnRyYXRlIDUgbWcgb3JhbCB0YWJsZXQKCiMgQXNzZXNzbWVudCBhbmQgUGxhbgpQYXRpZW50IGlzIHByZXNlbnRpbmcgd2l0aCBmdWxsLXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIHJlcG9ydHMgb2YgdmlvbGVuY2UgaW4gdGhlIGVudmlyb25tZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gZWxlY3RyaWNhbCBjYXJkaW92ZXJzaW9uCi0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gYXNzZXNzbWVudCBvZiBhbnhpZXR5IChwcm9jZWR1cmUpCi0gYXNzZXNzbWVudCB1c2luZyBtb3JzZSBmYWxsIHNjYWxlIChwcm9jZWR1cmUpCi0gc2NyZWVuaW5nIGZvciBkb21lc3RpYyBhYnVzZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:bf5f3c8b-a26f-8212-b2f0-69b164338e57",
    resource: {
      resourceType: "DiagnosticReport",
      id: "bf5f3c8b-a26f-8212-b2f0-69b164338e57",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:9ccbf5a3-78c2-dd31-5e05-6ad80a34e923" },
      effectiveDateTime: "2017-06-07T13:40:58-04:00",
      issued: "2017-06-07T13:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTctMDYtMDcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzggeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGFjdXRlIHZpcmFsIHBoYXJ5bmdpdGlzIChkaXNvcmRlcikuIAoKIyMgUGxhbgoK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:953ca796-06d5-e97f-4b1c-699cc13ef40c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "953ca796-06d5-e97f-4b1c-699cc13ef40c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:f93a3d5c-1103-006d-d630-8ccd97fa81a5",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:3af41d67-f5ce-983c-1abd-36ee144201e6",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:e70423b7-c443-18ed-ca17-74b53556b1f6",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:12922f9c-58d2-e98c-3bae-7840b920d1d3",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:bdb68166-0ff1-ab08-318b-5e85b42435c5",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:a5ceff61-1945-cc17-dd7b-ff60661cd6e7",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:27af5600-cb04-f756-2b92-2ae9a4b567e6",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:d5b6675b-2226-bfb3-82c8-e810608bf208",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:7786bdd7-30eb-2f0e-6fa6-88620974be70",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:dac6f623-24e9-1b1e-12cb-a52abf2c0f9f",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b92a5469-92b2-6491-53cc-59c1bfab6f3e",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:ff50f8c5-055a-8477-f0b2-4f1edc5f941a",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:a51266f1-3e0e-0be0-915b-6cafa7c8246f",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b1bc5541-d1af-f9c3-24d2-426cc5dad868",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:d0faf6d7-c25c-0b21-6afa-802a5717c0e6",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:56bf350e-8efb-6969-a7bd-0e2ae0d4b680",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5f8dd757-9d99-095c-9131-356f821ed76e",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5f8dd757-9d99-095c-9131-356f821ed76e",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:bcca8c3a-de0b-5b1e-eb84-9afca92234ca",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:7acf7f95-288b-dab6-0894-b2830a0c25da",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:c590d86e-8906-37c5-72d2-b24e5b1d6207",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:e15924af-5efa-265a-b939-2f325134e7f4",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:165871b1-863d-1aa2-cb9a-d605e81dbdfd",
    resource: {
      resourceType: "DiagnosticReport",
      id: "165871b1-863d-1aa2-cb9a-d605e81dbdfd",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5a196794-21eb-46b2-8825-78359ff53540" },
      effectiveDateTime: "2017-11-19T01:40:58-05:00",
      issued: "2017-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTctMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f3930b5a-e99a-9016-b88f-f229039ba5db",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f3930b5a-e99a-9016-b88f-f229039ba5db",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T04:05:09-04:00",
      issued: "2018-03-16T04:05:09.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:f280f849-2c8f-3617-d516-9714c78095d1",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:d33a2a74-5b77-e02d-8c0a-2f033723c20a",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:452d1876-7b1c-f03d-1faf-c0eb349b9669",
    resource: {
      resourceType: "DiagnosticReport",
      id: "452d1876-7b1c-f03d-1faf-c0eb349b9669",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "55757-9",
            display: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
          },
        ],
        text: "Patient Health Questionnaire 2 item (PHQ-2) [Reported]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T04:40:38-04:00",
      issued: "2018-03-16T04:40:38.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:6ec008c2-88f0-4b17-c12b-783edcd0a960",
          display:
            "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8bb9ff86-1fdb-d736-f0b8-b4e21c1cd37a",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8bb9ff86-1fdb-d736-f0b8-b4e21c1cd37a",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T05:22:28-04:00",
      issued: "2018-03-16T05:22:28.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:23551a06-334c-a90e-926b-7505a1639641",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:947c3bfd-f779-d903-fc2d-828fcb5bb98f",
    resource: {
      resourceType: "DiagnosticReport",
      id: "947c3bfd-f779-d903-fc2d-828fcb5bb98f",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0f8c2928-31d8-516b-f67b-341d0767b626" },
      effectiveDateTime: "2018-03-16T02:40:58-04:00",
      issued: "2018-03-16T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTgtMDMtMTYKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgNzkgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gZWxlY3RyaWNhbCBjYXJkaW92ZXJzaW9uCi0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGRlcHJlc3Npb24gc2NyZWVuaW5nIChwcm9jZWR1cmUpCi0gZGVwcmVzc2lvbiBzY3JlZW5pbmcgdXNpbmcgcGF0aWVudCBoZWFsdGggcXVlc3Rpb25uYWlyZSB0d28taXRlbSBzY29yZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:94d792ad-53eb-f258-2c1c-8be9aaf45624",
    resource: {
      resourceType: "DiagnosticReport",
      id: "94d792ad-53eb-f258-2c1c-8be9aaf45624",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:0b715acf-c532-cf92-1c36-195eab87d3cd",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:e3d6a204-5175-69c3-3449-742f44ccb68a",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:789a4faf-6928-3a24-3e5b-b008d86b80a5",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:b5afa0d0-224a-3879-24be-4706f02b0d31",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:851e2ee0-6fbb-7884-2af1-724eec167765",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:2e88744a-5b73-c762-987d-05ab5a8990a0",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:4a31a418-b1bb-3b34-1442-f058958032ac",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:ce5cc8f3-4969-9900-0338-771e6411f246",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:fd0a5f44-d61b-b4da-d6b0-7ba0a597f5de",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:36b8debe-ee9c-303e-1e32-64f4bf92f49a",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:f81fe701-8daf-3ac0-3c7e-7d76f443a1a0",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:84250397-9447-38e6-b819-d9d8be480794",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:1bc43b23-a422-7554-82c9-1d7f61b4985f",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:ca95ddda-5730-402a-1202-b008ad47f532",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:0b3e4730-551e-20a9-61d6-383042c4b2ca",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:22ab86d4-eb53-fd1c-b550-6fd50c6c9df5",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:2ffefbaa-d8d6-2d7a-ceca-ee440a3aaa90",
    resource: {
      resourceType: "DiagnosticReport",
      id: "2ffefbaa-d8d6-2d7a-ceca-ee440a3aaa90",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:86d024e1-8eb0-5cf5-283f-a556eb4d4454",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:e4c9754f-6fc4-2935-8fae-7e244ec5c561",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:06532ea7-0c5f-8f11-2daf-ce91b5aa2fb3",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:865137ff-5237-e8d2-eb6f-9aef04e8ee80",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:5a35ebce-dd87-08eb-88aa-76e939d2bb78",
    resource: {
      resourceType: "DiagnosticReport",
      id: "5a35ebce-dd87-08eb-88aa-76e939d2bb78",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:3da1b45a-98cf-40a0-639b-da3769375fbd" },
      effectiveDateTime: "2018-11-19T01:40:58-05:00",
      issued: "2018-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTgtMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e054df93-1089-5ab2-ce17-0ae6f8888739",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e054df93-1089-5ab2-ce17-0ae6f8888739",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:3d1e351f-0cb1-3d24-da5c-66f12700a9ac",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:e259b379-776a-ae83-b7f4-e8a41cf2c7ac",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:892204ce-7721-691d-f7cd-87e5e11599af",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:6bb08236-a0c7-248b-f22a-37440276e8eb",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:cd9be7e1-ba0a-90f8-326b-a0a2a55a36d0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "cd9be7e1-ba0a-90f8-326b-a0a2a55a36d0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "69737-5",
            display: "Generalized anxiety disorder 7 item (GAD-7)",
          },
        ],
        text: "Generalized anxiety disorder 7 item (GAD-7)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T03:53:01-04:00",
      issued: "2019-03-22T03:53:01.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:761f4f7d-319f-02dc-2c2e-ded39f97a44b",
          display:
            "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:67bbebfb-d5b3-f09d-b8bb-a943c3d876df",
    resource: {
      resourceType: "DiagnosticReport",
      id: "67bbebfb-d5b3-f09d-b8bb-a943c3d876df",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T04:18:39-04:00",
      issued: "2019-03-22T04:18:39.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:00eb811a-7556-8f51-f274-59de71f4537d",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:777acd43-753b-d61f-5a65-ec338f64395b",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4d580930-bbae-d379-d23e-bfb6af00fb07",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4d580930-bbae-d379-d23e-bfb6af00fb07",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "76499-3",
            display: "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
          },
        ],
        text: "Humiliation, Afraid, Rape, and Kick questionnaire [HARK]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T04:57:36-04:00",
      issued: "2019-03-22T04:57:36.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:bd001317-76d3-5d0f-52ab-cc74cfc9a06b",
          display: "Total score [HARK]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:48236e49-c8cf-c05a-71aa-7af12ea0b011",
    resource: {
      resourceType: "DiagnosticReport",
      id: "48236e49-c8cf-c05a-71aa-7af12ea0b011",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:82b0be07-3d37-1e84-4675-a5be060c6eba" },
      effectiveDateTime: "2019-03-22T02:40:58-04:00",
      issued: "2019-03-22T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTktMDMtMjIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODAgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gZWxlY3RyaWNhbCBjYXJkaW92ZXJzaW9uCi0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2YgYW54aWV0eSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIHNjcmVlbmluZyBmb3IgZG9tZXN0aWMgYWJ1c2UgKHByb2NlZHVyZSkKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBhY2V0YW1pbm9waGVuIDMyNSBtZyAvIG94eWNvZG9uZSBoeWRyb2NobG9yaWRlIDEwIG1nIG9yYWwgdGFibGV0IFtwZXJjb2NldF0KLSB2ZXJhcGFtaWwgaHlkcm9jaGxvcmlkZSA0MCBtZwotIGRpZ294aW4gMC4xMjUgbWcgb3JhbCB0YWJsZXQKLSBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAotIHdhcmZhcmluIHNvZGl1bSA1IG1nIG9yYWwgdGFibGV0Cg==",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8e58d922-a84e-bc21-7b2c-8fe5b866a59d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8e58d922-a84e-bc21-7b2c-8fe5b866a59d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:10e13da2-eedc-d637-8864-1612bc1b2078",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:76bd963e-51ef-47c6-34ef-8b8422b9947a",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:4c8f2f4e-9c69-b6ba-0924-d203cd8c4b93",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:4b828ccd-1305-a8c7-6591-12c31001913b",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:32a90138-f40c-4a1d-3463-c8346a4be935",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:e54bbf5b-6c8c-af0d-cbb2-08df28b363cc",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:f8f1d32f-8782-0bf2-5523-2b753df1725f",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:91183621-d54b-074e-40bb-1823b9d70020",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:eada7278-ac41-8a33-fee7-db2bab34d318",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:3bbd8a11-1654-b2e3-623d-4cb1e4fa796e",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:1bb6144c-a97c-cdba-24a2-e1d3f30046e7",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:669dc74a-b3fb-784c-fb64-fafd3f3526b0",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:93dbe057-bfd8-52ca-dadc-4378b431455b",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:e7471fa5-8d2c-e3a9-ca72-f64b0abad727",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:7b7f4b3c-36d8-9184-4df9-1c3de4da7e84",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:17676d2d-5b5f-d741-9eb6-173926f116d5",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:d72c0aef-fa8e-4858-e709-65d34e6fa8c0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "d72c0aef-fa8e-4858-e709-65d34e6fa8c0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:9549410c-5a48-1673-f6b7-0ed6ee18e777",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:9dbd849e-1f73-abff-20bf-12369f388301",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:d1fc1fd0-9818-2b01-8037-030fe3cdd6cd",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:a3f257ec-f222-e1f0-53c8-9e06d4dc2eb7",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:aae9d803-9fdb-487f-dfd3-63fbda1cfa5c",
    resource: {
      resourceType: "DiagnosticReport",
      id: "aae9d803-9fdb-487f-dfd3-63fbda1cfa5c",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:45de51a5-826b-5376-07e6-942c4c348459" },
      effectiveDateTime: "2019-11-19T01:40:58-05:00",
      issued: "2019-11-19T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMTktMTEtMTkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:c5631dfb-e0c8-f6f7-dba9-99c9ac41fc59",
    resource: {
      resourceType: "DiagnosticReport",
      id: "c5631dfb-e0c8-f6f7-dba9-99c9ac41fc59",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "69737-5",
            display: "Generalized anxiety disorder 7 item (GAD-7)",
          },
        ],
        text: "Generalized anxiety disorder 7 item (GAD-7)",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T03:44:01-04:00",
      issued: "2020-03-27T03:44:01.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:f079cf3d-7f77-d610-bc2d-e732e3949358",
          display:
            "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:0f99a1ba-c90c-6b54-155b-f1856e7aca1b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "0f99a1ba-c90c-6b54-155b-f1856e7aca1b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T04:10:46-04:00",
      issued: "2020-03-27T04:10:46.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:02515dc1-91a7-c81f-615e-224f9b3ba2dd",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:4b788c31-37bd-4b92-7484-5eda5a171c4c",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e5c9e9ed-0ffb-9230-58ae-952615da9d58",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e5c9e9ed-0ffb-9230-58ae-952615da9d58",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T04:49:20-04:00",
      issued: "2020-03-27T04:49:20.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:50998216-8562-fdcc-0ca1-c256344cdfb4",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:4b4952bb-0f14-6432-3429-6b020e0881d5",
    resource: {
      resourceType: "DiagnosticReport",
      id: "4b4952bb-0f14-6432-3429-6b020e0881d5",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:0e600ef2-45d6-bb45-9556-d77c6bbf0b58" },
      effectiveDateTime: "2020-03-27T02:40:58-04:00",
      issued: "2020-03-27T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjAtMDMtMjcKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODEgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUsIHRkIChhZHVsdCkgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gY2F0aGV0ZXIgYWJsYXRpb24gb2YgdGlzc3VlIG9mIGhlYXJ0Ci0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2YgYW54aWV0eSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:371f9f97-d671-62ba-47c3-be451f699c38",
    resource: {
      resourceType: "DiagnosticReport",
      id: "371f9f97-d671-62ba-47c3-be451f699c38",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:4a692b56-5c6b-f88b-8843-920623b8b770",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:770a1ed7-3128-3c54-e70f-1c8895819093",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:0525d3ee-b294-961a-30c2-206615ed2b2c",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:a864d24e-d5ee-8447-e174-c38cfe2a0392",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:57817565-f563-e77f-b90c-54383cad2681",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:49e6a4d2-094f-c405-b009-7883042b6b1a",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:559d2012-ba37-355e-b651-4340bb5dc92d",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:ea155180-8d2f-7833-1db2-420c34be4fbb",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:4ac6dc7f-6380-2e7b-c463-d89d3c3f7fb6",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:467e5af0-9de3-41d9-e8cf-7d5dc0d80f0a",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b8c4fdea-8df6-0842-1cd8-ab3cd4d957e0",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:e15505a9-8385-8ee2-3cd1-9cc282a6f820",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:754944c6-d99a-2f40-1a98-2463d7ca6538",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:1de522a9-7ec4-d29f-c937-361866c5781c",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:74b5d13a-bf72-87a7-061e-f629f4b3358d",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:fba4a9dd-ae31-4e44-1bce-614eb2f6569c",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:f85daafd-f186-c628-71e6-54994603f67b",
    resource: {
      resourceType: "DiagnosticReport",
      id: "f85daafd-f186-c628-71e6-54994603f67b",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:cc9de5a0-9f1b-3dce-13e6-e1f8ab295571",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:f6ee24af-674b-696a-0553-66ed4c7c0248",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:9bac7907-b192-26af-73b1-cf1301e6e4bc",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:adade872-e4d4-9a8c-d8c6-be8b905ced48",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e2052ee2-0c71-ef8d-f643-76815df6fcea",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e2052ee2-0c71-ef8d-f643-76815df6fcea",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:f7056c3e-56f3-7b6c-a0a9-64e8a55f520e" },
      effectiveDateTime: "2020-11-18T01:40:58-05:00",
      issued: "2020-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjAtMTEtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fca2ea54-35e2-3a9f-6726-32fa9c96e477",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fca2ea54-35e2-3a9f-6726-32fa9c96e477",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:5ef6b653-7ec7-85ff-8931-2c8eec210e3d" },
      effectiveDateTime: "2021-03-12T01:40:58-05:00",
      issued: "2021-03-12T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjEtMDMtMTIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IHNhcnMtY292LTIgKGNvdmlkLTE5KSB2YWNjaW5lLCBtcm5hLCBzcGlrZSBwcm90ZWluLCBsbnAsIHByZXNlcnZhdGl2ZSBmcmVlLCAxMDAgbWNnLzAuNW1sIGRvc2UuIAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:6865d493-838f-1674-1f55-08d58dbfa23d",
    resource: {
      resourceType: "DiagnosticReport",
      id: "6865d493-838f-1674-1f55-08d58dbfa23d",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "58410-2",
            display:
              "Complete blood count (hemogram) panel - Blood by Automated count",
          },
        ],
        text: "Complete blood count (hemogram) panel - Blood by Automated count",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:05f0cdf9-5295-0130-4dee-d26c500e1624",
          display: "Leukocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:0823534e-b22f-4e9d-fd5d-5dd9973b19ea",
          display: "Erythrocytes [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:bec5c14c-6356-937d-d09d-9a4084c66aa1",
          display: "Hemoglobin [Mass/volume] in Blood",
        },
        {
          reference: "urn:uuid:8fc2f583-cd72-e4fd-7f3f-a3d4d0020ad2",
          display: "Hematocrit [Volume Fraction] of Blood by Automated count",
        },
        {
          reference: "urn:uuid:ead00780-4c8a-2a14-40c1-05b2be84c5d6",
          display: "MCV [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:96d1a8f5-01c8-c99f-2463-3733a087049b",
          display: "MCH [Entitic mass] by Automated count",
        },
        {
          reference: "urn:uuid:293ad538-0f64-96cd-155c-1a8533b1aaa7",
          display: "MCHC [Mass/volume] by Automated count",
        },
        {
          reference: "urn:uuid:2a6283f0-e597-9fbc-ae77-5076cf8f3f5d",
          display:
            "Erythrocyte distribution width [Entitic volume] by Automated count",
        },
        {
          reference: "urn:uuid:af75530e-3226-c264-1a58-75930b0fe77f",
          display: "Platelets [#/volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:e3835bfb-4cc2-2bb3-57fb-9c70f294f2f4",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
        {
          reference: "urn:uuid:1479a80e-cecc-24fa-8712-9949620102ca",
          display:
            "Platelet mean volume [Entitic volume] in Blood by Automated count",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:59a6217d-35ae-6b63-1859-e33fdd4d29d7",
    resource: {
      resourceType: "DiagnosticReport",
      id: "59a6217d-35ae-6b63-1859-e33fdd4d29d7",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "59453-1",
            display: "Morse Fall Scale panel",
          },
        ],
        text: "Morse Fall Scale panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T03:48:55-04:00",
      issued: "2021-04-02T03:48:55.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:a8c51444-bcf2-af5c-9446-5c7cc354eddd",
          display: "Fall risk total [Morse Fall Scale]",
        },
        {
          reference: "urn:uuid:64835b06-4cb9-ff95-6d63-c7498eff8181",
          display: "Fall risk level [Morse Fall Scale]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:fcdb472a-4cb3-20ec-759b-8ea5aa9526d8",
    resource: {
      resourceType: "DiagnosticReport",
      id: "fcdb472a-4cb3-20ec-759b-8ea5aa9526d8",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "72109-2",
            display:
              "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
          },
        ],
        text: "Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T04:30:17-04:00",
      issued: "2021-04-02T04:30:17.908-04:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|819507f6-772a-3a2c-ac1d-d6b806531744",
          display: "PCP39516",
        },
      ],
      result: [
        {
          reference: "urn:uuid:2dab3210-6744-29fd-f8d2-6a5a933d4c3a",
          display: "Total score [AUDIT-C]",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:798aeb4d-8507-950c-67af-748af40986e0",
    resource: {
      resourceType: "DiagnosticReport",
      id: "798aeb4d-8507-950c-67af-748af40986e0",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:ced92b48-fcc3-947b-faf8-6b584f22780d" },
      effectiveDateTime: "2021-04-02T02:40:58-04:00",
      issued: "2021-04-02T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999974159",
          display: "Dr. Saul605 Casper496",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjEtMDQtMDIKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuClBhdGllbnQgaXMgcHJlc2VudGluZyB3aXRoIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKS4gCgojIyBQbGFuClBhdGllbnQgd2FzIGdpdmVuIHRoZSBmb2xsb3dpbmcgaW1tdW5pemF0aW9uczogaW5mbHVlbnphLCBzZWFzb25hbCwgaW5qZWN0YWJsZSwgcHJlc2VydmF0aXZlIGZyZWUuIApUaGUgZm9sbG93aW5nIHByb2NlZHVyZXMgd2VyZSBjb25kdWN0ZWQ6Ci0gY2F0aGV0ZXIgYWJsYXRpb24gb2YgdGlzc3VlIG9mIGhlYXJ0Ci0gYXNzZXNzbWVudCBvZiBoZWFsdGggYW5kIHNvY2lhbCBjYXJlIG5lZWRzIChwcm9jZWR1cmUpCi0gbWVkaWNhdGlvbiByZWNvbmNpbGlhdGlvbiAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgbW9yc2UgZmFsbCBzY2FsZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgb2Ygc3Vic3RhbmNlIHVzZSAocHJvY2VkdXJlKQotIGFzc2Vzc21lbnQgdXNpbmcgYWxjb2hvbCB1c2UgZGlzb3JkZXJzIGlkZW50aWZpY2F0aW9uIHRlc3QgLSBjb25zdW1wdGlvbiAocHJvY2VkdXJlKQpUaGUgcGF0aWVudCB3YXMgcHJlc2NyaWJlZCB0aGUgZm9sbG93aW5nIG1lZGljYXRpb25zOgotIGFjZXRhbWlub3BoZW4gMzI1IG1nIC8gb3h5Y29kb25lIGh5ZHJvY2hsb3JpZGUgMTAgbWcgb3JhbCB0YWJsZXQgW3BlcmNvY2V0XQotIHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nCi0gZGlnb3hpbiAwLjEyNSBtZyBvcmFsIHRhYmxldAotIGFjZXRhbWlub3BoZW4gMzAwIG1nIC8gaHlkcm9jb2RvbmUgYml0YXJ0cmF0ZSA1IG1nIG9yYWwgdGFibGV0Ci0gd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQK",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:e9efbb33-3b66-b9f2-d36a-c88d572204fc",
    resource: {
      resourceType: "DiagnosticReport",
      id: "e9efbb33-3b66-b9f2-d36a-c88d572204fc",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:001e2916-2a73-95a5-7171-7e4d8ca549c8" },
      effectiveDateTime: "2021-04-09T02:40:58-04:00",
      issued: "2021-04-09T02:40:58.908-04:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjEtMDQtMDkKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODIgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgpQYXRpZW50IHdhcyBnaXZlbiB0aGUgZm9sbG93aW5nIGltbXVuaXphdGlvbnM6IHNhcnMtY292LTIgKGNvdmlkLTE5KSB2YWNjaW5lLCBtcm5hLCBzcGlrZSBwcm90ZWluLCBsbnAsIHByZXNlcnZhdGl2ZSBmcmVlLCAxMDAgbWNnLzAuNW1sIGRvc2UuIAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:b5338d94-48dd-cd6b-8d58-11f8cfddee92",
    resource: {
      resourceType: "DiagnosticReport",
      id: "b5338d94-48dd-cd6b-8d58-11f8cfddee92",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "24323-8",
            display: "Comprehensive metabolic 2000 panel - Serum or Plasma",
          },
        ],
        text: "Comprehensive metabolic 2000 panel - Serum or Plasma",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:3ebf2acd-101f-97ea-c400-c24e74efceec",
          display: "Glucose",
        },
        {
          reference: "urn:uuid:764fb74c-eb2d-94ba-5335-350d7a214478",
          display: "Urea Nitrogen",
        },
        {
          reference: "urn:uuid:bd49bb5d-b67d-262c-82b8-8904bebbe363",
          display: "Creatinine",
        },
        {
          reference: "urn:uuid:147a4749-be28-f69a-5324-dfaf0bcc7dd5",
          display: "Calcium",
        },
        {
          reference: "urn:uuid:fe6f6020-1eda-52fd-9900-5f1c5912f103",
          display: "Sodium",
        },
        {
          reference: "urn:uuid:caaac0a5-dcb0-8ad7-bb97-de03812761b4",
          display: "Potassium",
        },
        {
          reference: "urn:uuid:ff8b358c-bc63-ea53-66cf-bd1dcc183d00",
          display: "Chloride",
        },
        {
          reference: "urn:uuid:00f308e6-639b-b2a9-4118-81b103e1015a",
          display: "Carbon Dioxide",
        },
        {
          reference: "urn:uuid:472530d4-9300-b4c7-237a-056a4d9613d1",
          display: "Glomerular filtration rate/1.73 sq M.predicted",
        },
        {
          reference: "urn:uuid:caba3582-b90c-722d-bd81-4f701d222592",
          display: "Protein [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:03290258-322e-e818-570a-6ab57c35edb1",
          display: "Albumin [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b46f166a-37e3-68e2-77a0-cd8ebfd33b28",
          display: "Globulin [Mass/volume] in Serum by calculation",
        },
        {
          reference: "urn:uuid:4126c830-56ef-27a8-63c6-268626e8a31f",
          display: "Bilirubin.total [Mass/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:b0119079-bb8a-5a2d-7518-a26eb8034f6d",
          display:
            "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:aa0790a5-52df-14fd-804e-ffb8d070b15e",
          display:
            "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
        {
          reference: "urn:uuid:769cc808-aa57-45d5-8492-0305fc821cb6",
          display:
            "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:97c71cb0-8ff7-956d-99ae-07f40e46be39",
    resource: {
      resourceType: "DiagnosticReport",
      id: "97c71cb0-8ff7-956d-99ae-07f40e46be39",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab",
        ],
      },
      status: "final",
      category: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0074",
              code: "LAB",
              display: "Laboratory",
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "57698-3",
            display: "Lipid Panel",
          },
        ],
        text: "Lipid Panel",
      },
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Organization?identifier=https://github.com/synthetichealth/synthea|b1ddf812-1fdd-3adf-b1d5-32cc8bd07ebb",
          display: "BETH ISRAEL DEACONESS HOSPITAL - PLYMOUTH",
        },
      ],
      result: [
        {
          reference: "urn:uuid:2ddfacb6-38e5-7042-5820-20fceb408ef6",
          display: "Total Cholesterol",
        },
        {
          reference: "urn:uuid:ab9c1b5f-e30a-1087-97a1-715e2fff26dd",
          display: "Triglycerides",
        },
        {
          reference: "urn:uuid:37c8d296-ba11-c8c3-c55f-3f565e1f1031",
          display: "Low Density Lipoprotein Cholesterol",
        },
        {
          reference: "urn:uuid:af74ed3a-4026-bc53-d4f3-cb13373fe7be",
          display: "High Density Lipoprotein Cholesterol",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
  {
    fullUrl: "urn:uuid:8f241f9a-577f-b862-19f0-9e6e4a3631a3",
    resource: {
      resourceType: "DiagnosticReport",
      id: "8f241f9a-577f-b862-19f0-9e6e4a3631a3",
      meta: {
        profile: [
          "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note",
        ],
      },
      status: "final",
      category: [
        {
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
      ],
      code: {
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
      subject: { reference: "urn:uuid:9d92805b-c25a-c7ad-60ca-80c93ffb80b1" },
      encounter: { reference: "urn:uuid:7dc8a0a0-6512-3e63-424c-410ce7f97f5e" },
      effectiveDateTime: "2021-11-18T01:40:58-05:00",
      issued: "2021-11-18T01:40:58.908-05:00",
      performer: [
        {
          reference:
            "Practitioner?identifier=http://hl7.org/fhir/sid/us-npi|9999999779",
          display: "Dr. Ingrid581 Jacobson885",
        },
      ],
      presentedForm: [
        {
          contentType: "text/plain; charset=utf-8",
          data: "CjIwMjEtMTEtMTgKCiMgQ2hpZWYgQ29tcGxhaW50Ck5vIGNvbXBsYWludHMuCgojIEhpc3Rvcnkgb2YgUHJlc2VudCBJbGxuZXNzCkZyYW5jZXMzNzYKIGlzIGEgODMgeWVhci1vbGQgbm9uLWhpc3BhbmljIHdoaXRlIG1hbGUuIFBhdGllbnQgaGFzIGEgaGlzdG9yeSBvZiBwYXJ0LXRpbWUgZW1wbG95bWVudCAoZmluZGluZyksIGxpbWl0ZWQgc29jaWFsIGNvbnRhY3QgKGZpbmRpbmcpLCBub3QgaW4gbGFib3IgZm9yY2UgKGZpbmRpbmcpLCByZXBvcnRzIG9mIHZpb2xlbmNlIGluIHRoZSBlbnZpcm9ubWVudCAoZmluZGluZyksIGZ1bGwtdGltZSBlbXBsb3ltZW50IChmaW5kaW5nKSwgYWN1dGUgdmlyYWwgcGhhcnluZ2l0aXMgKGRpc29yZGVyKSwgdmljdGltIG9mIGludGltYXRlIHBhcnRuZXIgYWJ1c2UgKGZpbmRpbmcpLCBzdHJlc3MgKGZpbmRpbmcpLgoKIyBTb2NpYWwgSGlzdG9yeQpQYXRpZW50IGlzIG1hcnJpZWQuIFBhdGllbnQgaXMgYW4gYWN0aXZlIHNtb2tlciBhbmQgaXMgYW4gYWxjb2hvbGljLgogUGF0aWVudCBpZGVudGlmaWVzIGFzIGhldGVyb3NleHVhbC4KClBhdGllbnQgY29tZXMgZnJvbSBhIGhpZ2ggc29jaW9lY29ub21pYyBiYWNrZ3JvdW5kLgogUGF0aWVudCBoYXMgYSBoaWdoIHNjaG9vbCBlZHVjYXRpb24uClBhdGllbnQgY3VycmVudGx5IGhhcyBNZWRpY2FyZS4KCiMgQWxsZXJnaWVzCk5vIEtub3duIEFsbGVyZ2llcy4KCiMgTWVkaWNhdGlvbnMKd2FyZmFyaW4gc29kaXVtIDUgbWcgb3JhbCB0YWJsZXQ7IHZlcmFwYW1pbCBoeWRyb2NobG9yaWRlIDQwIG1nOyBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldDsgYWNldGFtaW5vcGhlbiAzMjUgbWcgLyBveHljb2RvbmUgaHlkcm9jaGxvcmlkZSAxMCBtZyBvcmFsIHRhYmxldCBbcGVyY29jZXRdOyBkaWdveGluIDAuMTI1IG1nIG9yYWwgdGFibGV0OyBhY2V0YW1pbm9waGVuIDMwMCBtZyAvIGh5ZHJvY29kb25lIGJpdGFydHJhdGUgNSBtZyBvcmFsIHRhYmxldAoKIyBBc3Nlc3NtZW50IGFuZCBQbGFuCgoKIyMgUGxhbgoKVGhlIHBhdGllbnQgd2FzIHByZXNjcmliZWQgdGhlIGZvbGxvd2luZyBtZWRpY2F0aW9uczoKLSBzaW12YXN0YXRpbiAxMCBtZyBvcmFsIHRhYmxldAo=",
        },
      ],
    },
    request: { method: "POST", url: "DiagnosticReport" },
  },
];

export default entities;
