//module là một đoạn chương trình dùng để giải quyết vấn đề nào đó. 
export const helloByVietnamese = () => {
    console.log('xin chào');
}

export const helloByDongLaos = () => {
    console.log('Đmm');
}

export const helloByNongPien = () => {
    console.log('nhincailon');
}
export default helloByVietnamese
//để sử dụng chức năng của module thì phải export 
// export {helloByDongLaos,helloByVietnamese,helloByNongPien} hoặc export từ khi khai báo biến 

