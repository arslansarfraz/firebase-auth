import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as routerLink } from 'react-router-dom';
import { DASHBOARD, LOGIN } from "lib/routes";
import { useRegister } from "hooks/auth";
import { useForm } from "react-hook-form";
import {
    emailValidate,
    passwordValidate,
    usernameValidate,
} from "utils/form-validate";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const { register: signup, isLoading } = useRegister();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function handleRegister(data) {
        signup({
            username: data.username,
            email: data.email,
            password: data.password,
            redirectTo: DASHBOARD,
        });
    }
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={500} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <Stack spacing={4}>
                            <FormControl id="username" isInvalid={errors.username}>
                                <FormLabel>UserName</FormLabel>
                                <Input type="text" placeholder='username' {...register("username", usernameValidate)} />
                                <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl id="email" isInvalid={errors.email}>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" placeholder='user@email.com' {...register("email", emailValidate)} />
                                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl id="password" isInvalid={errors.password}>
                                <FormLabel>Password</FormLabel>
                                <Input type={showPassword ? 'text' : 'password'} placeholder='Password123' {...register("password", passwordValidate)} />
                                <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                            </FormControl>

                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }} type="submit"
                                    isLoading={isLoading}>
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user? <Link color={'blue.400'} to={LOGIN} as={routerLink}>Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}