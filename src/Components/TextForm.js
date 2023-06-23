import React, {useState} from 'react';

function TextForm(props) {
    const [text, setText] = useState();

    const TextToUpperCase = ()=>{
        const newUpperCaseText = text.toUpperCase();
        setText(newUpperCaseText);
    }
    const TextToLowerCase = ()=>{
        const newLowerCaseText = text.toLowerCase();
        setText(newLowerCaseText);
    }

    const ChangeText = (e)=>{
        setText(e.target.value);
    }

    const ClearText = ()=>{
        const newtext = '';
        setText(newtext);
    }

    const CopyText = ()=>{
        const textArea = document.getElementById("exampleFormControlTextarea1");
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        const copyText = text;
        navigator.clipboard.writeText(copyText);
    }

    const RemoveExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        newText = newText.join(' ');
        setText(newText);
    }

    const CapitalizeText = ()=>{
        const newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
    }

    const CapitalizeEachWord = ()=>{
        let Text = text.split(" ");
        const newText = Text.map((e)=>{
            console.log(e);
            return (e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
        });
        setText(newText.join(" "));
    }

    const TextToAlternateText = ()=>{
        let newText = '';
        let index = 0;
        for(let i=0 ; i<text.length ; i++){
            if(text[i]!=' '){
                if(index%2==0){
                    newText += text[i].toLowerCase();
                    index++
                }
                else{
                    newText += text[i].toUpperCase();
                    index++;
                }
            }
            else{
                newText += ' ';
            }
        }
        setText(newText);
    }

    let wordsInText = 0
    if(text){
        text.split(" ").forEach((e)=>{
            wordsInText = (e.length!=0) ? wordsInText+=1 : wordsInText;
        });
    }
    let charatersInText = (text) ? text.length : 0;
    let readingTime = 0.005*wordsInText;

    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="exampleFormControlTextarea1" placeholder="Type or paste your text here" rows="10" onChange={ChangeText}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-2 btn-sm" onClick={TextToUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-2 btn-sm" onClick={TextToLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-2 btn-sm" onClick={TextToAlternateText}>aLrErNaTe TeXt</button>
                <button className="btn btn-primary mx-1 my-2 btn-sm" type='button' onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-2 btn-sm" type='button' onClick={CapitalizeText}>Capitalize Text</button>
                <button className="btn btn-primary mx-1 my-2 btn-sm" type='button' onClick={CapitalizeEachWord}>Capitalize Each Word</button>
                <button className="btn btn-success mx-1 my-2 btn-sm" onClick={CopyText}>Copy Text</button>
                <button type="button" className="btn btn-dark mx-1 my-2 btn-sm" onClick={ClearText}>Clear Text</button>
            </div>

            <div className="container my-3">
                <h2>Your text summary here</h2>
                <p><b>{wordsInText}</b> words, <b>{charatersInText}</b> characters <br/> <b>{readingTime}</b> minutes read</p>
            </div>

            <div className="container my-4">
                <h2>Preview Text</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm;