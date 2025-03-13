import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('confirm')!).render(
  <StrictMode>
    <div>
      <h1>Registration completed successfully</h1>
      <p>Please check your registered email for verification</p>
    </div>
  </StrictMode>
)