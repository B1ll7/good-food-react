// Login page

import Main               from "./components/Main"
import Left               from "./components/Left"
import Right              from "./components/Right"
import FormContainer      from "./components/FormContainer"
import Form               from "./components/Form"
import FormLine           from "./components/FormLine"
import Input              from "./components/Input"
import Label              from "./components/Label"
import Button             from "./components/Button"
import H3                 from "./components/H3"
import Text               from "./components/Text"
import TextBold           from "./components/TextBold"
import SpaceArround       from "./components/SpaceArround"
import Link               from "./components/Link"
import Logo               from "./components/Logo"
import VerticalHeroBanner from "./components/VerticalHeroBanner"

const LoginPage =  () => {
    return (
        <Main>
            <Left>
                <Logo />
                <FormContainer>
                    <H3>Connexion</H3>
                    <Text _class="text-gray-500">Welcome back! please enter your details</Text>
                    <Form>
                        <FormLine>
                            <Label for="username">Email</Label>
                            <Input
                                name="user" type="text"
                                placeholder="example@example.com"
                            />
                        </FormLine>
                        <FormLine>
                            <SpaceArround>
                                <Label for="password">Mot de passe</Label>
                                <Link _class="text-right">Mot de passe oublié</Link>
                            </SpaceArround>
                            <Input
                                name="pass" type="password"
                                placeholder="**********************"
                            />
                        </FormLine>
                        <Button>Connexion</Button>
                    </Form>
                    <TextBold>Pas de compte ? <Link href="/signup">S'inscrire</Link></TextBold>
                </FormContainer>
            </Left>
            <Right>
                <VerticalHeroBanner />
            </Right>
        </Main>
    )
}

export default  LoginPage;