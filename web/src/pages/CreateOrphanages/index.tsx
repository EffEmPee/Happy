import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus, FiX } from "react-icons/fi";

import { PageCreateOrphanage, CreateOrphanageForm, InputBlock, ConfirmButton, NewImages, ImagesContainer, ButtonSelect } from './style';

import Sidebar from "../../components/Sidebar/index";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "styled-components";

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude:0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [whatsapp, setWhatsapp] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  
  const { title } = useContext(ThemeContext);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = images;

    selectedImages.push(...Array.from(event.target.files));
    
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      console.log(image);
      return URL.createObjectURL(image);
    });
    
    setPreviewImages(selectedImagesPreview);
    console.log(previewImages);
  }

  function handleDeleteImages(index: number) {
    const deletedImagesPreview = previewImages.filter(
      (image, compareIndex) => index !== compareIndex,
    );

    setPreviewImages(deletedImagesPreview);

    const deletedImages = images.filter(
      (image, compareIndex) => index !== compareIndex,
    );

    setImages(deletedImages);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    data.append('whatsapp', whatsapp);
    
    images.forEach(image => {
      data.append('images', image);
    })

    await api.post('orphanages', data)

    alert('Cadastro realizado com sucesso!');

    history.push('/app');
  }

  return (
    <PageCreateOrphanage>
      <Sidebar />

      <main>
        <CreateOrphanageForm onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-23.3116478,-51.1933809]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              { position.latitude !== 0 && (
                <Marker 
                  interactive={false} 
                  icon={mapIcon} 
                  position={[
                    position.latitude,
                    position.longitude
                  ]}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                id="name" 
                value={name} 
                onChange={e => setName(e.target.value)} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea 
                id="name" 
                maxLength={300}
                value={about} 
                onChange={e => setAbout(e.target.value)} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                {previewImages.map((image, index) => {
                  return (
                    <div key={image}>
                      <button onClick={() => handleDeleteImages(index)}>
                        <FiX size={24} color="#A4031F" />
                      </button>

                      <img src={image} alt={image} />
                    </div>
                  )
                })}
                  
                <NewImages htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </NewImages>
              </ImagesContainer>

              <input multiple onChange={handleSelectImages} type="file" id="image[]" />
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea 
                id="instructions"
                value={instructions} 
                onChange={e => setInstructions(e.target.value)}/>
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours} 
                onChange={e => setOpeningHours(e.target.value)} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="whatsapp">Número de contato (WhatsApp)</label>
              <input
                id="whatsapp"
                value={whatsapp} 
                onChange={e => setWhatsapp(e.target.value)} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonSelect>
                <button 
                  type="button" 
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button 
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </ButtonSelect>
            </InputBlock>
          </fieldset>

          <ConfirmButton type="submit">
            Confirmar
          </ConfirmButton>
        </CreateOrphanageForm>
      </main>
    </PageCreateOrphanage>
  );
}

export default CreateOrphanage;

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
