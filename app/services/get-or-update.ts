
import { createClient } from 'contentful'
// Define interfaces for the expected data structures
interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    // Add other relevant fields based on your API's response structure
}

interface UserPreview {
    id: string;
    firstName: string;
    lastName: string;
    // Add other relevant fields based on your API's response structure
}

interface PaginationParams {
    page?: number;
    limit?: number;
    created?: boolean;
}
interface ApiRequest { 
    url: string;
    headers: Record<string, string>;
    revalidate: number;
}

const requestInfo: ApiRequest = {
    url: `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/${process.env.CONTENTFUL_ENTRIES_ID}`,
    headers: {
        'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    revalidate: 100
};
export const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    host: 'cdn.contentful.com',
    environment: process.env.CONTENTFUL_ENVIRONMENT,
}).withoutUnresolvableLinks;
 


