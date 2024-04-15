
import { type FilePiece } from './file';
import { resolve } from 'path';
import { MAX_THREAD } from "../const/index"

// 这里做文件加密和
export const createHash = ({chunks}:{chunks: any[]}): Promise<string> => {
    
    return new Promise( resolve => {
        // 开启多线程
        const worker = new Worker(new URL('./worker', import.meta.url), {
            type: 'module',
        })
        worker.postMessage(chunks);
        worker.onmessage = (e) => {
            console.log("我回收到的message", e.data);
        }
    })
     
}

