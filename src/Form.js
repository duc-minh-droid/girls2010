import {useEffect, useState} from 'react'
import {storage} from './fbconfig'
import {ref,uploadBytes,listAll,getDownloadURL} from 'firebase/storage'

function App() {
  const [files, setFiles] = useState([])
  const [urls, setUrls] = useState([])
  const handleFiles = (e) => {
    setFiles(e.target.files)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (files.length == 0) return 
    for (let i = 0; i < files.length; i++) {
      const filesRef = ref(storage, `baokhanh/${files[i].name}`)
      uploadBytes(filesRef, files[i])
        .then(snapshot=>{
          getDownloadURL(snapshot.ref).then(url=>{
            setUrls(prev=>[...prev, url])
          })
        })
    }
  }

  const listRef = ref(storage, "baokhanh/")
  useEffect(()=>{
    listAll(listRef)
      .then(res=>{
        res.items.forEach(item=>{
          getDownloadURL(item).then(url=>{
            setUrls(prev=>[...prev, url])
          })
        })
      })
  },[])

  return (
    <div className="App" onSubmit={handleSubmit}>
      <form>
        <input type='file' multiple onChange={handleFiles}/>
        <input type='submit' />
      </form>
      {urls && urls.map(url=><img key={url} alt='' src={url} />)}
    </div>
  );
}

export default App;
