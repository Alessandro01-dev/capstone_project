import LocationSection from './sectionLayout/locationSection/LocationSection';
import BioSection from './sectionLayout/bioSection/BioSection'
import ProfilePictureSection from './sectionLayout/profilePictureSection/ProfilePictureSection';
import NameSection from './sectionLayout/nameSection/NameSection';
import SurnameSection from './sectionLayout/surnameSection/SurnameSection';
import NationalitySection from './sectionLayout/nationalitySection/NationalitySection'
import useUsers from '../../../hooks/useUsers';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import useUpload from '../../../hooks/useUpload';
import { useAuth } from '../../../contexts/AuthContext';
import toast from 'react-hot-toast';

const AccountSettings = ({ isLoaded }) => {

  const { authData, authIsLoading, getProfile } = useAuth();
  const { updateUser, usersIsLoading } = useUsers();
  const { uploadFile, isUploading } = useUpload()

  useEffect(() => {
    if (!authData) {
      getProfile();
    }
  }, []);

  const handleUpdate = async (field, value) => {

    if (!authData?._id) return;

    const dataToSave = field === 'nationality' ? { ...value } : value;

    let success = false;
    try {
      if (field === 'avatar' && typeof value !== 'string') {
        const url = `${import.meta.env.VITE_BASE_SERVER_URL}/users/${authData._id}/avatar`;
        const result = await uploadFile(url, value, 'avatar', 'PATCH');
        success = result.success;
      } else {
        success = await updateUser(authData._id, { [field]: dataToSave });
      }
      if (success) {
        await getProfile();

        toast.success(`${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully!`);
      } else {
        toast.error(`Failed to update ${field}.`);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };


  return (
    <div
      className='d-flex flex-column gap-1 mx-auto'
    >
      {authIsLoading && (
        <Spinner
          className='mx-auto'
        />
      )}

      {authData && (
        <>
          <ProfilePictureSection
            initialData={authData.avatar}
            onSave={(newAvatar) => handleUpdate('avatar', newAvatar)}
            isLoading={usersIsLoading || isUploading || authIsLoading}
          />

          <NameSection
            initialName={authData.name}
            onSave={(newName) => handleUpdate('name', newName)}
            isLoading={usersIsLoading || authIsLoading}
          />

          <SurnameSection
            initialSurname={authData.surname}
            onSave={(newSurname) => handleUpdate('surname', newSurname)}
            isLoading={usersIsLoading || authIsLoading}
          />

          <NationalitySection
            initialNationality={authData.nationality}
            onSave={(newNationality) => handleUpdate('nationality', newNationality)}
            isLoading={usersIsLoading || authIsLoading}
          />

          <BioSection
            initialBio={authData.bio}
            onSave={(newBio) => handleUpdate('bio', newBio)}
            isLoading={usersIsLoading || authIsLoading}
          />

          <LocationSection
            isLoaded={isLoaded}
            initialLocation={authData.location}
            onSave={(newLocation) => handleUpdate('location', newLocation)}
            isLoading={usersIsLoading || authIsLoading}
          />
        </>
      )}

    </div>
  )
}

export default AccountSettings