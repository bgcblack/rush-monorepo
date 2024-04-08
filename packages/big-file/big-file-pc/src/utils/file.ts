// 文件操作工具
 export  interface FilePiece {
    chunk: Blob;
    size: number;
 }
 // 分片的长度
 const CHUNK_SIZE = 5 * 1024 * 1024;
 /** 
  * @file 目标文件
  * @chunkSize 分片大小
  */
 export const splitFile = (file: File, chunkSize = CHUNK_SIZE) => {
   const fileChunkList: FilePiece[] = [];
   let len = 0
   while (len < file.size) {
      // 一个分片
      const piece = file.slice(len, len + chunkSize);
      fileChunkList.push({
         chunk: piece,
         size: piece.size,
      })
      len += chunkSize;
   }
   return fileChunkList
 }
 /** 
  * @pieces 所有的文件分片
  * @hash 计算好的
  */
//  export const uploadChunks = (pieces) => {

//  }