const testData = {
    main: {
      type: "dataset",
      name: "Sandbox Land Data",
      dateCreated: new Date(Date.now()).toISOString().split(".")[0] + "Z",
      author: "MetaGameHub",
      license: "MIT",
      files: [
        {
          url:
            "https://docs.google.com/spreadsheets/d/1pxJ_TjkkyHbhW6fuSOuowb0vEVi7bpQC/export?format=xlsx",
          contentType: "xlsx",
        },
      ],
    },
  };