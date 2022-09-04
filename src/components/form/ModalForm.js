import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { lettersDB, storage } from '../../fbconfig'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { useSelector } from 'react-redux'

const encryptName = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str.split(' ').join('').toLowerCase()
}

function ModalForm({ setToggleModal }) {
    // const [files, setFiles] = useState([])
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const user = useSelector(state => state.user.currentUser)

    // const handleFiles = (e) => {
    //     setFiles(e.target.files)
    // }
    const resetForm = () => {
        // setFiles([])
        setName('')
        setContent('')
        setToggleModal(false)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await addDoc(lettersDB, {
            content,
            slug: encryptName(name),
            recipient: name,
            sender: user.displayName,
            createdAt: serverTimestamp()
        })
        // if (files.length == 0) return
        // for (let i = 0; i < files.length; i++) {
        //     const filesRef = ref(storage, `${encryptName(name)}/${files[i].name}`)
        //         .then(() => {
        //             uploadBytes(filesRef, files[i])
        //         })
        // }
        resetForm()
    }

    return (
        <form className='p-4 pt-0 flex flex-col '
        onSubmit={(e)=>handleSubmit(e)}>
            <>
                <p className='text-xl py-3'>Tên facebook (phải đúng đm)</p>
                <input className='border-2 p-1 rounded-xl'
                 type='text' placeholder='Ten facebook' required onChange={(e) => setName(e.target.value)} />
            </>
            <>
                <p className='text-xl py-3'>Nội dung thư (dài quá ăn lồn)</p>
                <CKEditor editor={ClassicEditor} onChange={(evt, editor) => setContent(editor.getData())} />
            </>
            {/* <>
                <input className='py-2'
                type='file' multiple onChange={handleFiles} required />
            </><br /> */}
            <div className='flex w-full justify-center'>
            <button type='submit' className='px-3 text-white rounded-xl bg-green-400'>Submit</button>
            </div>
        </form>
    )
}

export default ModalForm