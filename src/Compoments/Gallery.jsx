import "../styleGallery.css"
import { React } from 'react'
import arraysImage from "./imagesGallery" // static


export default function Gallery() {

    //get reference
    const fullContenier = document.getElementById("full-contenier");
    const fullimg = document.getElementById("full-img");


    function closeImg() {
        fullContenier.style.display = "none";
    }

    function openImg(img) {
       
        fullContenier.style.display = "flex";
        fullimg.src = img;
        fullimg.alt = img;
    }
    return (
        <div className="container-gallery">
            <section>
                <div id="full-contenier" ref={fullContenier}>
                    <img src="" alt="" id="full-img" ref={fullimg} />
                    <span onClick={closeImg}>x</span>
                </div>
                <h1>Gallery</h1>
                <hr />
                <div className="content-img">
                    {

                        arraysImage.map((pathImg, key) => <img src={pathImg} onClick={() => openImg(pathImg)} alt={key} />)
                    }
                </div>
            </section>


        </div>
    )
}
