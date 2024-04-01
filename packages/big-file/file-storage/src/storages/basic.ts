import { isValidString } from "../utils"
// 定义抽象方法 有子类去实现具体操作

export abstract class  BasicStorage {
  abstract isFileExists(filename: string): Promise<boolean>; //判断该文件名是否存在
  abstract isDirExists(dir: string): Promise<boolean>;  //判断该文件夹名是否存在
  abstract readFile(filename: string): Promise<Buffer>; // 读某个文件
  abstract writeFile(filename: string, content: Buffer); //写某个文件
   
}