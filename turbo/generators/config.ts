import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setHelper("curlyfront", function(text)
  {
    return ('{');
  }); 

  plop.setGenerator("Lambda Only Service", {
    description:
      "Scaffolds a new basic lambda service",
    prompts: [
      {
        type: "input",
        name: "service-name",
        message: "What should we call the new service?",
      },
    ],
    actions: [
        { 
          type: "addMany",
          destination: "services/{{ dashCase service-name }}/",
          base: "{{currentPath}}/turbo/generators/templates/lambda/",
          templateFiles: "{{currentPath}}/turbo/generators/templates/lambda/**/*",
          data: {currentPath: process.cwd()}
        }
    ]
  },
  );
  plop.setGenerator("API Gateway w/Lambda", {
    description:
      "Scaffolds a new API Gateway w/ lambda service",
    prompts: [
      {
        type: "input",
        name: "service-name",
        message: "What should we call the new service?",
      },
    ],
    actions: [
        { 
          type: "addMany",
          destination: "services/{{ dashCase service-name }}/",
          base: "{{currentPath}}/turbo/generators/templates/api-lambda/",
          templateFiles: "{{currentPath}}/turbo/generators/templates/api-lambda/**/*",
          data: {currentPath: process.cwd()}
        }
    ]
  },
  );
  plop.setGenerator("Gateway - S3 + Notification - Lambda", {
    description:
      "API Gateway fronting S3 which notifies a Lambda",
    prompts: [
      {
        type: "input",
        name: "service-name",
        message: "What should we call the new service?",
      },
    ],
    actions: [
        { 
          type: "addMany",
          destination: "services/{{ dashCase service-name }}/",
          base: "{{currentPath}}/turbo/generators/templates/gw-s3-lambda/",
          templateFiles: "{{currentPath}}/turbo/generators/templates/gw-s3-lambda/**/*",
          data: {currentPath: process.cwd()}
        }
    ]
  },
  );
  plop.setGenerator("Lambda Layer", {
    description:
      "Scaffolds a new Lambda Layer",
    prompts: [
      {
        type: "input",
        name: "layer-name",
        message: "What should we call the new layer?",
      },
    ],
    actions: [
        { 
          type: "addMany",
          destination: "layers/{{ dashCase layer-name }}/",
          base: "{{currentPath}}/turbo/generators/templates/layer/",
          templateFiles: "{{currentPath}}/turbo/generators/templates/layer/**/*",
          data: {currentPath: process.cwd()}
        }
    ]
  },
  );
}
