import dayjs from 'dayjs';
import ButtonIcon from '../../../../core/components/ButtonIcon';
import { Profile } from '../../../../core/types/Profile';
import './styles.scss';

type Props = {
    profile: Profile;
}

const ProfileCard = ({ profile }: Props) => {
    
    return (
        <div className="profile-container">
            <div className="info-container">
                <div>
                    <img src={profile.avatar_url} alt={profile.name} className="profile-image"></img>
                </div>
                <div className="user-infos">
                    <div className="infos-profile-git">
                        <p className="social-info">Repositórios públicos: {profile.public_repos}</p>
                        <p className="social-info">Seguidores: {profile.followers}</p>
                        <p className="social-info">Seguindo: {profile.following}</p>
                    </div>
                    <div className="professional-info">
                        <h1 className="info-title">Informações</h1>
                        <div className="info-card-container">
                            <h2 className="info-inputs">Empresa:&nbsp;</h2>
                            <p className="info-inputs-value">{profile.company}</p>
                        </div>
                        <div className="info-card-container">
                            <h2 className="info-inputs">Website/Blog:&nbsp;</h2>
                            <p className="info-inputs-value">{profile.blog}</p>
                        </div>
                        <div className="info-card-container">
                            <h2 className="info-inputs">Localidade:&nbsp;</h2>
                            <p className="info-inputs-value">{profile.location}</p>
                        </div>
                        <div className="info-card-container">
                            <h2 className="info-inputs">Membro desde:&nbsp;</h2>
                            <p className="info-inputs-value">{dayjs(profile.created_at).format('DD/MM/YYYY')} </p>
                        </div>
                    </div>
                </div>
            </div>
            <ButtonIcon text="Ver perfil" url={profile.html_url}/>
        </div>
    );
}

export default ProfileCard;