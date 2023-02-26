import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormErrorMessage,
} from '@chakra-ui/react';
import { DASHBOARD, REGISTER } from 'lib/routes';
import { Link as routerLink } from 'react-router-dom';
import { useLogin } from 'hooks/auth'
import { useForm } from 'react-hook-form';
import { emailValidate, passwordValidate } from 'utils/form-validate';

export default function Login() {
    const { login, isLoading } = useLogin();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    async function handleLogin(data) {
        const succeeded = await login({
            email: data.email,
            password: data.password,
            redirectTo: DASHBOARD,
        });
        if (succeeded) reset()
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={500} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'} href='https://github.com/arslansarfraz' isExternal>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <FormControl id="email" isInvalid={errors.email}>
                                <FormLabel>Email address</FormLabel>
                                <Input type="text" placeholder='user@email.com' {...register("email", emailValidate)} />
                                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl id="password" mb={3} isInvalid={errors.password}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder='Password123' {...register("password", passwordValidate)} />
                                <FormErrorMessage> {errors.password && errors.password.message}</FormErrorMessage>

                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }} type="submit" isLoading={isLoading}
                                    loadingText="Logging In">
                                    Sign in
                                </Button>
                            </Stack>
                        </form>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Dont have account? <Link color={'blue.400'} to={REGISTER} as={routerLink}>Register</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}