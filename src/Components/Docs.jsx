import { Button, Modal } from '@mui/material';
import React, { useState } from 'react'

function Docs() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <div className="container text-center fs-1 mt-5">
        <h1>Docs App</h1>
        <Button onClick={handleOpen}>Add Files</Button>
        <Modal open={open} setOpen={setOpen} />
      </div>
    </>
  )
}

export default Docs