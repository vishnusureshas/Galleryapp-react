import React,{useState ,useEffect} from 'react'
import './Gallery.css';

function Gallery() {
    const [Images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = () => {
            const data = [
                {
                    id:1,
                    url:'https://picsum.photos/id/1/300/200',
                    title:"Image 1"
        
                },
                {
                    id:2,
                    url:'https://picsum.photos/id/2/300/200',
                    title:"Image 2"
        
                },
                {
                    id:3,
                    url:'https://picsum.photos/id/3/300/200',
                    title:"Image 3"
        
                },
                {
                    id:4,
                    url:'https://picsum.photos/id/4/300/200',
                    title:"Image 4"
        
                },
                {
                    id:5,
                    url:'https://picsum.photos/id/5/300/200',
                    title:"Image 5"
        
                },
                {
                    id:6,
                    url:'https://picsum.photos/id/6/300/200',
                    title:"Image 6"       
                },
                {
                    id:7,
                    url:'https://picsum.photos/id/7/300/200',
                    title:"Image 7"       
                },
                {
                    id:8,
                    url:'https://picsum.photos/id/8/300/200',
                    title:"Image 8"       
                },
                {
                    id:9,
                    url:'https://picsum.photos/id/9/300/200',
                    title:"Image 9"       
                },
                {
                    id:10,
                    url:'https://picsum.photos/id/10/300/200',
                    title:"Image 10"       
                },
                {
                    id:11,
                    url:'https://picsum.photos/id/11/300/200',
                    title:"Image 11"       
                },
                {
                    id:12,
                    url:'https://picsum.photos/id/12/300/200',
                    title:"Image 12"       
                },
            ]
            setImages(data)
        }
     fetchImages()
    }, [])

    const handleDeleteImage = (id) => {
      setImages(Images.filter((image) =>image.id !== id))
    }
    

  return (
    <div>
        <h1 className='title'>Image Gallery App</h1>
        {
            Images.length > 0?
            (
                <div className='image-grid'>
                {
                  Images.map((image)=> (
                      <div className='image-card' key={image.id}> 
                      <img src={image.url} alt=''/>       
                      <div className='image-details'>
                         <h3>{image.title}</h3>
                         <button onClick={()=>handleDeleteImage(image.id)}>Delete</button>
                      </div>
                     </div>
                  ))
                 
                }
                 
      
              </div>
            ):
            <p className='no-images'>No Images Found</p>
        }

       
    </div>
  )
}

export default Gallery
