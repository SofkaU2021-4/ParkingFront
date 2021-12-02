import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { useState, useEffect ,useRef} from 'react';
import useFormData from '../hooks/useFormData';
import {postDb} from "../utils/Postdb"
import { useConsulta } from '../context/ConsultaContext'

const ModalNuevoVehiculo = () => {

  const {setConsulta}=useConsulta();
  const{form, formData, updateFormData} = useFormData();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  const submitForm = async (e) => {
      e.preventDefault();
      await postDb(formData);
      handleClose();
      setConsulta(true);
    }

  return (
    <div >
      <button className=" hover:bg-blue-700  bg-blue-500  text-white rounded-3xl px-6 py-3" onClick={handleClickOpen('paper')}>Nuevo vehiculo  <i className="fas fa-plus-circle fa-lg ml-4"></i></button>
        <Dialog
          className= "bg-black bg-opacity-50"
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title" className=" shadow-sm">
            <Box>
              <div className="flex justify-center items-center mt-3">
                <div className="flex items-center ">
                  <div className="ml-6 w-full">
                    <h1 className="id-perfil font-bold text-3xl text-center text-blue-500">Ingreso</h1>
                  </div>
                </div>
              </div>

            </Box>
          </DialogTitle>
        <form ref={form} onChange={updateFormData} onSubmit={submitForm}>

          <div className="m-7 mt-4 texto-perfil">
            <div className="grid grid-cols-1 gap-2">
              <div>
                <label className=" font-medium text-xl">Placa:</label>
                <input name='placa' placeholder='Placa' type="text" required className=" uppercase text-sm w-full font-light rounded-lg h-7 pl-2 bg-gray-200" />
              </div>
              <div>
                <label className=" font-medium text-xl">Nombre Dueño:</label>
                <input name='dueno' placeholder='Nombre' type="text"  required className=" text-sm font-light w-full  rounded-lg h-7 pl-2 bg-gray-200" />
              </div>
            </div>
            <div className=' my-10 flex justify-center'>
              <input type="submit" value="Aceptar" className=' bg-blue-500 border text-white px-5 py-2 rounded-lg cursor-pointer'/>
            </div>
        </div>
        </form>
        </Dialog>
    </div>
  );
}

export default ModalNuevoVehiculo ;
