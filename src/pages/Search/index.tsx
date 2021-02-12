import './styles.scss';
import { makeRequest } from '../../core/utils/requests';
import ButtonIcon from '../../core/components/ButtonIcon';
import { useState } from 'react';
import { Profile } from '../../core/types/Profile';
import ProfileCard from './components/ProfileCard';
import ImageLoader from './components/ProfileCard/Loaders/ImageLoader';
import InfoLoader from './components/ProfileCard/Loaders/InfoLoader';

type FormState = {
    user: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Search = () => {
    const [profile, setProfile] = useState<Profile>();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<FormState>({user: ''});

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        makeRequest({url: `https://api.github.com/users/${formData.user}`})
            .then(response => {
                setProfile(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }    

    return (
        <div className="search-container">
                <div className="search-infos">
                    <h1 className="search-title">Encontre um perfil Github</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleOnChange}
                            value={formData.user}
                            name="user"
                            type="text"
                            className="form-control input-user"
                            placeholder="Usuário Github"
                        />
                        <br/>
                        <ButtonIcon text="Encontrar" />
                    </form>
                </div>
                {
                    isLoading? (
                        <div className="profile-loaders profile-container">
                            <ImageLoader />
                            <InfoLoader />
                        </div>
                    ) : (
                        profile && <ProfileCard profile={profile} />                        
                    )
                    
                }
                    
        </div>
    );
}

export default Search;