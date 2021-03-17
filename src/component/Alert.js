import React from 'react';

export default function Alert() {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      This application puts your memory to the test. You are presented with multiple images of celebrities. The images get shuffled every-time they are clicked. You <strong> CAN NOT</strong> click on any image more than <strong>once</strong> or else your score resets to zero. The main objective is to get the highest score as possible.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}