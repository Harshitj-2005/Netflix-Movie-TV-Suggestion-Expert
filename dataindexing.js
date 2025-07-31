import * as dotenv from 'dotenv';
dotenv.config();

import { TextLoader } from 'langchain/document_loaders/fs/text';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import { Pinecone } from '@pinecone-database/pinecone';
import { PineconeStore } from '@langchain/pinecone';


async function indexDocument() {
    
    const CSV_PATH = './Netflix.csv';
    const textLoader = new TextLoader(CSV_PATH);
    const rawDocs = await textLoader.load();
console.log("PDF loaded");


const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
const chunkedDocs = await textSplitter.splitDocuments(rawDocs);
console.log("Chunking Completed");



 const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: 'text-embedding-004',
  });

  console.log("Embedding model configured")




const pinecone = new Pinecone();
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME);
 console.log("Pinecone configured")



await PineconeStore.fromDocuments(chunkedDocs, embeddings, {
    pineconeIndex,
    maxConcurrency: 5,
});

 console.log("Data Stored succesfully")


}

indexDocument();
