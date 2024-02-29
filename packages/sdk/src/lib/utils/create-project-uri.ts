import { imageUri } from "../types/const";

export const createProjectConfigUri = async (config: {
  name: string;
  description: string;
  theme: 'dark';
  creator: string;
}) => {
  const json = { 
    name: config.name,
    theme: 'dark',
    description: config.description,
    image: imageUri,
    deployments: { 
      production: '',
      staging: '',
    }, 
    pages: { 
      tree: [
        {
          id: 'Page1',
          children: [
            {
              id: 'Page1.1',
              children: []
            }
          ]
        }
      ], 
      metadata: { 
        'Page1': { 
          name: 'Page1',
          content: 'Page1 content'
        },
        'Page1.1': { 
          name: 'Page1.1',
          content: 'Page1.1 content'
        }
      }
    }
  }
  return json;
};
