import { useState } from 'react'
import axios from 'axios'
import CastInput from './uploadComponents/CastInput';
import DisplayMovie from './DisplayMovie';
import FormInput from './uploadComponents/FormInput';
import { useNavigate } from 'react-router-dom';


function UploadPage() {
    const [movieState, setMovieState] = useState({ name: "", rating: 0, plot: '', trailer: '', thumb: null, ss: [], cast: [] });
    const [dummy, setDummy] = useState(0);

    const navigate = useNavigate();


    function setThumb(e) {
        let updatedState = { ...movieState };
        updatedState.thumb = e.target.files[0];
        setMovieState(updatedState);
    }

    function setSS(e) {
        let updatedState = { ...movieState };
        updatedState.ss = e.target.files;
        setMovieState(updatedState);
    }

    function setName(e) {
        let updatedState = { ...movieState };
        updatedState.name = e.target.value;
        setMovieState(updatedState);
    }

    function setRating(e) {
        let updatedState = { ...movieState };
        updatedState.rating = e.target.value;
        setMovieState(updatedState);
    }

    function setPlot(e) {
        let updatedState = { ...movieState };
        updatedState.plot = e.target.value;
        setMovieState(updatedState);
    }

    function setTrailer(e) {
        let updatedState = { ...movieState };
        updatedState.trailer = e.target.value;
        setMovieState(updatedState);
    }

    function makePreview(e) {
        e.preventDefault();
        let temp = dummy;
        temp++;
        setDummy(temp);
        setTimeout(() => {
            document.getElementById('result').scrollIntoView({
                behavior: 'smooth'
            });
        }, 500);
        
    }

    async function uploadMovie(e) {
        e.preventDefault();
        setDummy(1);
        console.log(movieState);

        const formData = new FormData();
        if (!movieState.thumb) {
            alert('please upload a valid thumbnail');
            return;
        }
        formData.append('thumb', movieState.thumb);

        if (movieState.ss.length == 0) {
            alert('please uplad a atleast one screen shot');
            return;
        }

        for (let i = 0; i < movieState.ss.length; i++) {
            formData.append('ss', movieState.ss[i]);
        }

        if (movieState.cast.length == 0) {
            alert('please uplad a atleast one cast');
            return;
        }

        for (let i = 0; i < movieState.cast.length; i++) {
            if (!movieState.cast[i].image) {
                alert("upload image for all cast");
                return;
            }
            if (movieState.cast[i].name == "") {
                alert("cast name can't be empty");
                return;
            }
            formData.append('cast', movieState.cast[i].image);
            formData.append('castName', movieState.cast[i].name);
        }
        if (movieState.name == "") return alert("movie name can't be empty");
        formData.append('name', movieState.name);
        if (movieState.plot == "") return alert("movie plot can't be empty");
        formData.append('plot', movieState.plot);
        if (movieState.rating <= 10 && movieState.rating >= 0 && typeof (+movieState.rating) == 'number') {
            formData.append('rating', movieState.rating);
        }
        else {
            return alert('rating is not in valid format');
        }
        if (movieState.trailer == "") return alert("movie trailer can't be empty");
        formData.append('trailer', movieState.trailer);


        let res = await axios.post("http://localhost:3000/upload", formData)
        if (res.status == 200) {
            navigate('/preview', { state: res.data });
        }

        console.log(res.data);
    }

    return (<>
        {/* {console.log(movieState)} */}
        <div className="container">
            <h1>Add Movie</h1>
            <FormInput setName={setName} setRating={setRating} setPlot={setPlot} setThumb={setThumb} setSS={setSS} setTrailer={setTrailer} />
            <CastInput movieState={movieState} setMovieState={setMovieState} ></CastInput>
            <div className="btns">
                <button onClick={makePreview} >Check Preview</button>
                <button onClick={uploadMovie}>Upload</button>
            </div>
        </div>

        {(dummy) ?
            <DisplayMovie state={movieState} />
            : ""}

    </>)


}
export default UploadPage;