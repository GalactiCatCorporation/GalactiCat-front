import React from 'react'
import { HiOutlineMapPin, HiXMark, HiOutlineCalendarDays, HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { MultiSelect, Button } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import './Publish.scss';

function Publish() {
    const [startValue, setStartValue] = React.useState('');
    const [endValue, setEndValue] = React.useState('');
    const [stepList, setStepList] = React.useState([]);
    const [stepValue, setStepValue] = React.useState('');
    const [place, setPlace] = React.useState(1);

    const AddStep = () => {
        setStepList(stepList.concat(<Step key={stepList.length}></Step>));
    }

    const DeleteStep = (e) => {
        setStepList(stepList.filter((step) => step.key !== e.target.parentElement.key));
    }

    const AddPlace = () => {
        setPlace(place + 1);
    }

    const RemovePlace = () => {
        if (place > 1) {
            setPlace(place - 1);
        }
    }

    const Step = () => {
        return (
            <div className='step'>
                <MultiSelect
                    data={['Terre', 'Venus', 'Mars', 'Jupiter', 'Saturne', 'Neptune', 'Mercure', 'Uranus']}
                    icon={<HiOutlineMapPin size={20} />}
                    placeholder="Ajouter une étape"
                    searchable
                    searchValue={stepValue}
                    onSearchChange={setStepValue}
                    nothingFound="Inconnu"
                    maxSelectedValues={1}
                />
                <HiXMark size={25} className="step-delete" onClick={DeleteStep}/>
            </div>
        )
    }

    return (
        <>
            <h1>Publier un trajet</h1>
            <div className='content'>
                <form>
                    <MultiSelect
                        data={['Terre', 'Venus', 'Mars', 'Jupiter', 'Saturne', 'Neptune', 'Mercure', 'Uranus']}
                        icon={<HiOutlineMapPin size={20} />}
                        label="Départ"
                        placeholder="Planète de départ"
                        searchable
                        searchValue={startValue}
                        onSearchChange={setStartValue}
                        nothingFound="Inconnu"
                        required
                        maxSelectedValues={1}
                    />
                    <MultiSelect
                        data={['Terre', 'Venus', 'Mars', 'Jupiter', 'Saturne', 'Neptune', 'Mercure', 'Uranus']}
                        icon={<HiOutlineMapPin size={20} />}
                        label="Arrivée"
                        placeholder="Planète d'arrivée"
                        searchable
                        searchValue={endValue}
                        onSearchChange={setEndValue}
                        nothingFound="Inconnu"
                        required
                        className="input"
                        maxSelectedValues={1}
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