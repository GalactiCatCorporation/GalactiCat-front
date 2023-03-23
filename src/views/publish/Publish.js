import React, { useState, useEffect } from 'react'
import { HiOutlineMapPin, HiXMark, HiOutlineCalendarDays, HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { Select, Button } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import './Publish.scss';

function Publish() {
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');
    const [stepList, setStepList] = useState([]);
    const [place, setPlace] = useState(1);

    const AddStep = () => {
        setStepList(stepList.concat(<Step key={stepList.length} index={stepList.length} />));
    }

    const AddPlace = () => {
        setPlace(place + 1);
    }

    const RemovePlace = () => {
        if (place > 1) {
            setPlace(place - 1);
        }
    }

    const Step = ({ index }) => {
        const [key, setKey] = useState(index);
        const [stepValue, setStepValue] = useState('');

        useEffect(() => {
            setKey(index);
        }, [index]);

        const handleDelete = () => {
            handleDeleteStep(index);
        }

        const handleDeleteStep = (index) => {
            const newStepList = [...stepList];
            newStepList.splice(index, 1);
            setStepList(newStepList);
        }

        return (
            <div className='step' key={key}>
                <Select
                    data={['Terre', 'Venus', 'Mars', 'Jupiter', 'Saturne', 'Neptune', 'Mercure', 'Uranus']}
                    icon={<HiOutlineMapPin size={20} />}
                    searchable
                    onSearchChange={setStepValue}
                    searchValue={stepValue}
                    nothingFound="Inconnu"
                    placeholder="Ajouter une étape"
                />
                <HiXMark size={25} className="step-delete" onClick={handleDelete} />
            </div>
        )
    }

    return (
        <>
            <h1>Publier un trajet</h1>
            <div className='content'>
                <form>
                    <Select
                        data={['Terre', 'Venus', 'Mars', 'Jupiter', 'Saturne', 'Neptune', 'Mercure', 'Uranus']}
                        icon={<HiOutlineMapPin size={20} />}
                        label="Départ"
                        searchable
                        searchValue={startValue}
                        onSearchChange={setStartValue}
                        nothingFound="Inconnu"
                        required
                        placeholder="Planète de départ"
                    />
                    <Select
                        data={['Terre', 'Venus', 'Mars', 'Jupiter', 'Saturne', 'Neptune', 'Mercure', 'Uranus']}
                        icon={<HiOutlineMapPin size={20} />}
                        label="Arrivée"
                     
                        searchable
                        searchValue={endValue}
                        onSearchChange={setEndValue}
                        nothingFound="Inconnu"
                        required
                        className="input"
                        placeholder="Planète d'arrivée"
             
                    />
                    <div className='steps'>
                        <span>Étape(s)</span>
                        {stepList}
                        <p onClick={AddStep}>Ajouter une étape</p>
                    </div>
                    <DateTimePicker
                        icon={<HiOutlineCalendarDays size={20} />}
                        label="Date et heure de départ"
                        placeholder="Date et heure"
                        maw={400}
                        mx="auto"
                        required
                    />
                    <div className="free-place">
                        <label>Nombre de place(s) disponible(s)</label>
                        <div className='qty'>
                            <button type="button" className="lower" onClick={RemovePlace}><HiMinusSmall /></button>
                            <span>{place}</span>
                            <button type="button" className="more" onClick={AddPlace}><HiPlusSmall /></button>
                        </div>
                    </div>
                    <div className='submit-button'>
                        <Button className='btn btn-primary' type='submit'>Publier mon trajet</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Publish