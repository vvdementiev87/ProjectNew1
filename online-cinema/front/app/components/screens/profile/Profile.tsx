import { FontConfig } from 'next/dist/server/font-utils';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import Meta from '@/utils/meta/Meta';

import AuthFields from '../auth/AuthFields';
import SkeletonLoader from 'ui/SkeletonLoader';
import Button from 'ui/form-elements/Button';
import Heading from 'ui/heading/Heading';

import styles from './Profile.module.scss';
import { IProfileInput } from './profile.interface';
import { useProfile } from './useProfile';

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		});

	const { isLoading, onSubmit } = useProfile(setValue);

	return (
		<Meta seo={{ title: 'Profile' }}>
			<Heading title="Profile" className="mb-6" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields formState={formState} register={register} />
				)}
				<div className={styles.buttons}>
					<Button>Update</Button>
				</div>
			</form>
		</Meta>
	);
};

export default Profile;
