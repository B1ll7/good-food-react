// SignUp page

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

export default () => {
    return (
        <Main>
            <Left>
                <Logo />
                <FormContainer>
                    <H3>Inscription</H3>
                    <Text _class="text-gray-500">Welcome back! please enter your details</Text>
                    <Form>
                        <FormLine _class="flex">
                            <div class="container">
                                <Label for="lastname">Nom</Label>
                                <Input
                                    name="lastname" type="phone"
                                    placeholder="Doe"
                                />
                            </div>
                            <div class="spacer w-8"></div>
                            <div class="container">
                                <Label for="firstname">Prénom</Label>
                                <Input
                                    name="firstname" type="text"
                                    placeholder="John"
                                />
                            </div>
                        </FormLine>
                        <FormLine>
                            <Label for="phone">Téléphone</Label>
                            <Input
                                name="phone" type="phone"
                                placeholder="+33 6 10 10 10 10"
                            />
                        </FormLine>
                        <FormLine>
                            <Label for="username">E-mail</Label>
                            <Input
                                name="user" type="text"
                                placeholder="example@example.com"
                            />
                        </FormLine>
                        <FormLine>
                            <Label for="pass">Mot de passe</Label>
                            <Input
                                name="pass" type="password"
                                placeholder="**********************"
                            />
                        </FormLine>
                        <FormLine>
                            <Label for="pass_confirm">Confirmation du mot de passe</Label>
                            <Input
                                name="pass_confirm" type="password"
                                placeholder="**********************"
                            />
                        </FormLine>
                        <Button>Inscription</Button>
                    </Form>
                    <TextBold>Déja un compte ? <Link href="/login">Se connecter</Link></TextBold>
                </FormContainer>
            </Left>
            <Right>
                <VerticalHeroBanner />
            </Right>
        </Main>
    )
}
