/* =========================================================
   AHMED HACKING — SCRIPT.JS
   Fictional visual simulation only. No real network/hacking
   activity is performed anywhere in this file.
   ========================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     1) MATRIX RAIN BACKGROUND (canvas)
  --------------------------------------------------------- */
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');
  const glyphs = 'アイウエオカキクケコサシスセソ01234567890$#@%&ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let columns, drops;
  const fontSize = 15;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(1);
  }

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 4, 1, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
