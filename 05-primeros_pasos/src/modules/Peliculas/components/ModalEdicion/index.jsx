import React, { useEffect, useState } from 'react'
import { Button, Input, Modal } from '../../../../components'
import { guardarEnStorage } from '../../../../utils/guardarEnStorage'

export const ModalEdicion = ({ onClose, elemento, setValor, nameLocalStorage, modo = 'editar' }) => {

    const [form, setForm] = useState({
        titulo: '',
        descripcion: ''
    });

    useEffect(() => {
        if (modo === 'editar' && elemento) {
            setForm({
                titulo: elemento.titulo,
                descripcion: elemento.descripcion
            });
        }
    }, [elemento, modo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setValor(prev => {
            let nuevo;

            if (modo === 'editar') {
                nuevo = prev.map(p =>
                    p.id === elemento.id
                        ? { ...p, ...form }
                        : p
                );
            } else {
                nuevo = [
                    ...prev,
                    { id: new Date().getTime(), ...form }
                ];
            }

            guardarEnStorage(nameLocalStorage, nuevo);
            return nuevo;
        });

        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <Input
                label="Título"
                name="titulo"
                value={form.titulo}
                onChange={handleChange}
                placeholder="Título"
            />

            <Input
                label="Descripción"
                name="descripcion"
                type="textarea"
                value={form.descripcion}
                onChange={handleChange}
                placeholder="Descripción"
            />

            <Button variant="success" onClick={handleSubmit}>
                {modo === 'editar' ? 'Guardar' : 'Crear'}
            </Button>
        </Modal>
    );
};
