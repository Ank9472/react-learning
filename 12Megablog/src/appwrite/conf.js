import config from "../config/config.js";
import {Client, ID , Databases, Storage,Query} from 
"appwrite";

export class service{
   Client = new Client();
   Databases;
   bucket;
   
   constructor(){
     this.Client
     .setEndpoint(conf.appWriteUrl)
     .setProject(conf.appWriteProjectId)
     this.Databases = new Databases(this.Client);
     this.bucket = new Storage(this.Client); 
   }
    
   async createPost({tittle,slug,content,featuredImage, status, userId }){
    try {
          return await this.databases.createDocument (
             config.appwriteCollectionId,
             appwriteCollectionId,
          )
    } catch (error) {
       console.log("Appwrite serbice :: createPost :: error",error);
      }
   }

async updatePost ({slug,tittle,content,featuredImage, status, userId }){
  try {
        return await this.databases.updateDocument(
           config.appwriteDatabaseId,
          config.appwriteCollectionId,
          slug,
         {
             tittle,
             content,
             featuredImage,
             status
         } 
        )
  } catch (error) {
     console.log("Appwrite serbice :: createPost :: error",error);
    }
 }

 async deletePost (slug){
  try {
         await this.databases.deleteDocument(
           config.appwriteDatabaseId,
          config.appwriteCollectionId,
          config.appwritedocumentId,
          slug,
        )
        return true
  } catch (error) {
     console.log("Appwrite serbice :: createPost :: error",error);
     return trues
    }
 }

    async getPost(slug){
      try {
          return await this.databases.getDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
          )
      } catch (error) {
        console.log("Appwrite serive :: getPost ::error",error);
         return false;
      }
    }

    async getPost(queries= [Query.equal("status","active")]){
          try {
            return await this.databases.listDocuments(
                 config.appwriteDatabaseId,
                 config.appwriteCollectionId
                 [
                      Query.equal("status" , "active")
                      // yaha par queries kewal karke kar skte hain
                 ],
            )
          } catch (error) {
            console.log("Appwrite serive :: getPost :: error",error);
          }
    }

    // file uplaoad service
      
    async update(file){
       try {
          return await this.bucket.createFile(
             config.appwriteBucketId,
             ID.unique(),
             file
          ) 
       } catch (error) {
         console.log("Appwrite serive :: upploadFile :: error",error)
       }
    }
  
    async deleteFile(fileId){
       try {
          return await this.bucket.deleteFile(
            config.appwriteBucketId,
              fileId
          )
          re
       } catch (error) {
         console.log("Appwrite serive :: deleteFile :: error", error) 
          return false
       }
    }

    getFilePreview(fileId){
       return this.bucket.getFilePreview(
         config.appwriteBucketId,
         fileId,
       )
    }
  
}
const serive = new Service();
export default service


// when we use the try catch then catch gives error but contents in the try is the what we used in the backend.