import './Puzzle.css';
import { React, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './unruly.js';


function Puzzle() {

const canvasRef = useRef(null);
useEffect(() => {
    // Get the canvas element from the ref
    const canvas = canvasRef.current;

    // Load your game JavaScript file
    const script = document.createElement('script');
    script.src = 'unruly.js';

    // Append the script element to the body of the document
    document.body.appendChild(script);

    // Call the function that initializes your game on the canvas element
    // This assumes that your game script exports an "init" function
    script.onload = () => {
      window.init(canvas);
    };

    // Clean up the script element when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);


return (
<>
        <div>
            <h1 align="center">Unruly</h1>
            <h2 align="center">from Simon Tatham's Portable Puzzle Collection</h2>
        </div>

        <div id="puzzle">
            <script defer type="text/javascript" src="./game/unruly.js"></script>
            <form id="gamemenu">
                <ul>
                    <li><div tabindex="0">Game<ul>
                        <li><button type="button" id="specific">Enter game ID...</button></li>
                        <li><button type="button" id="random">Enter random seed...</button></li>
                        <li><button type="button" id="save">Download save file...</button></li>
                        <li><button type="button" id="load">Upload save file...</button></li>
                    </ul></div></li>
                    <li><div tabindex="0">Type<ul role="menu" id="gametype"></ul></div></li>
                    <li role="separator"></li>
                    <li><button type="button" id="new">New<span class="verbiage"> game</span></button></li>
                    <li><button type="button" id="restart">Restart<span class="verbiage"> game</span></button></li>
                    <li><button type="button" id="undo">Undo<span class="verbiage"> move</span></button></li>
                    <li><button type="button" id="redo">Redo<span class="verbiage"> move</span></button></li>
                    <li><button type="button" id="solve">Solve<span class="verbiage"> game</span></button></li>
                </ul>
            </form>

            <div id="resizable">
                <canvas ref={canvasRef} id="puzzlecanvas" tabindex="0"></canvas>
                <div id="statusbar"></div>
                <img
                    id="resizehandle"
                    alt="resize"
                    title="Drag to resize the puzzle. Right-click to restore the default size."
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='10'%20height='10'%3E%3Cpath%20d='M8.5,1.5l-7,7m7,-4l-4,4m4,-1l-1,1'%20stroke='black'%20stroke-linecap='round'/%3E%3C/svg%3E"
                />
            </div>
        </div>
        <div>
            <p>Colour every square either black or white, in such a way that:<ul>
                <li>no three consecutive squares, horizontally or vertically, arethe same colour</li>
                <li>each row and column contains the same number of black and white squares.</li>
            </ul>
            Left-click in an empty square to turn it black, or right-click to turn
            it white. Click again in an already-filled square to cycle it between
            black and white and empty; middle-click to reset any square to empty.</p>
        </div>
</>
 );
}

export { Puzzle };