import path from "path";
import { stat, readFile, writeFile, mkdir, readdir} from "fs/promises"
import { BasicStorage } from "./basic";

class FileSystemStroage extends BasicStorage { // 继承了BasicStorage 就必须实现所有方法 哪怕不用也要实现 不然报错
  async isFileExists(filename: string): Promise<boolean> {  
    try {
      const fState = await stat(filename); //会返回一个包含文件状态信息的stat对象(promise对象 isFileExists需要返回一个promise对象)
      return fState.isFile();
    } catch (error) {
      return false;
    }
  }

  async isDirExists(filename: string): Promise<boolean>{
    try {
      const fState = await stat(filename); //同上
      return fState.isDirectory();
    } catch (error) {
      return false;
    }
  }
  
  async readFile(filename: string): Promise<Buffer> {
    return readFile(filename);
  }

  async writeFile(filename: string, content: Buffer) {
    await writeFile(filename, content);
  }



}

export  const fsStorage = new FileSystemStroage();