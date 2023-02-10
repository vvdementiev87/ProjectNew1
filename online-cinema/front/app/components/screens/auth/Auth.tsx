import { log } from 'console';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';

import { useAuth } from '@/hooks/useAuth';

import Meta from '@/utils/meta/Meta';

import Button from 'ui/form-elements/Button';
import Heading from 'ui/heading/Heading';

import styles from './Auth.module.scss';
import AuthFields from './AuthFields';
import { IAuthInput } from './auth.interface';
import { useAuthRedirect } from './useAuthRedirect';

type Props = {};

const Auth = (props: Props) => {
	useAuthRedirect();
	const { isLoading } = useAuth();
	const [type, setType] = useState<'login' | 'register'>('login');
	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({ mode: 'onChange' });

	const login = (data) => {
		console.log(data);
	};
	const register = (data) => {
		console.log(data);
	};

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data);
		else if (type === 'register') register(data);
		reset();
	};

	return (
		<Meta seo={{ title: 'Auth' }}>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>
					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	);
};

export default Auth;
