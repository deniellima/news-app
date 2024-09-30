import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import { Flaticon } from '@flaticon/flaticon-uicons';
import { useState } from 'react';
import { styles } from './styles';
import { PreSets } from '@/styles/preSets';
import { colors } from '@/styles/colors';
import { Button } from '../models/button';


export function StepperRegister () {
    const steps = [1, 2, 3, 4];
    const [currentStep, setCurrentStep] = useState(steps[0])
    const next = () => {
        setCurrentStep(currentStep + 1)
    }

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [terms, setTerms] = useState(false);

    const [news, setNews] = useState(false);
    const [economy, setEconomy] = useState(false);
    const [cripto, setCripto] = useState(false);
    const [gossip, setGossip] = useState(false);
    const [reading, setReading] = useState(false);
    const [music, setMusic] = useState(false);

    if (currentStep === 1 ){
        return (
            <View style={styles.content}>
                {/* Step */}
                <View style={styles.steps}>
                    <View style={styles.stepCurent} />
                    <View style={styles.step} />
                    <View style={styles.step} />
                    <View style={styles.step} />
                </View>

                {/* Input email */}
                <View style={PreSets.containerInput}>
                    <Text style={PreSets.label}>Nome</Text>
                    <View style={PreSets.contentInput}>
                        <Feather name="user" size={18} color={colors.gray[200]} />
                        <TextInput 
                            style={PreSets.input} 
                            placeholder='Informe seu nome' 
                            placeholderTextColor={colors.gray[400]} 
                            enterKeyHint='next'
                        />
                    </View>
                </View>

                {/* Input email */}
                <View style={PreSets.containerInput}>
                    <Text style={PreSets.label}>Email</Text>
                    <View style={PreSets.contentInput}>
                        <Feather name="mail" size={18} color={colors.gray[200]} />
                        <TextInput 
                            style={PreSets.input} 
                            placeholder='Informe seu email' 
                            placeholderTextColor={colors.gray[400]} 
                            enterKeyHint='next'
                        />
                    </View>
                </View>

                {/* Input password */}
                <View style={PreSets.containerInput}>
                    <Text style={PreSets.label}>Senha</Text>
                    <View style={PreSets.contentInput}>
                        <Feather name="lock" size={18} color={colors.gray[200]} />
                        <TextInput 
                            style={PreSets.input} 
                            placeholder='Informe uma senha' 
                            placeholderTextColor={colors.gray[400]} 
                            enterKeyHint='next'
                            secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Feather name={passwordVisible ? 'eye' : 'eye-off'} size={18} color={colors.gray[200]} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Input password */}
                <View style={PreSets.containerInput}>
                    <Text style={PreSets.label}>Senha</Text>
                    <View style={PreSets.contentInput}>
                        <Feather name="lock" size={18} color={colors.gray[200]} />
                        <TextInput 
                            style={PreSets.input} 
                            placeholder='Informe uma senha' 
                            placeholderTextColor={colors.gray[400]} 
                            enterKeyHint='next'
                            secureTextEntry={!confirmVisible}
                        />
                        <TouchableOpacity onPress={() => setConfirmVisible(!confirmVisible)}>
                            <Feather name={confirmVisible ? 'eye' : 'eye-off'} size={18} color={colors.gray[200]} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Terms */}
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => setTerms(prev => !prev)}>
                        <Feather
                            name={terms === true ? 'check-circle' : 'circle'}
                            size={16}
                            color={terms === true ? colors.primary : colors.gray[200]}
                        />
                    </TouchableOpacity>
                    <Text style={PreSets.label}>Você concorda com os
                        <Pressable>
                            <Text style={PreSets.pressable}>Temos de uso</Text>
                        </Pressable>
                    </Text>
                </View>

                {/* Button */}
                <TouchableOpacity style={PreSets.b1} onPress={next}>
                    <Text style={PreSets.bt}>Continuar</Text>
                </TouchableOpacity>

                <Button.Root>
                    <Button.Text text='Teste 13'/>
                </Button.Root>

                <View style={styles.footer}>
                    <Text style={PreSets.label}>Já possui uma conta? 
                        <Pressable> 
                            <Text style={PreSets.pressable}>Entrar</Text>
                        </Pressable> 
                    </Text>
                </View>
            </View>
        )
    }

    if (currentStep === 2 ){
        return (
            <View style={styles.content}>
                {/* Step */}
                <View style={styles.steps}>
                    <View style={styles.stepCompleted} />
                    <View style={styles.stepCurent} />
                    <View style={styles.step} />
                    <View style={styles.step} />
                </View>

                <Text style={PreSets.tg}>Quais temas você tem interesse?</Text>

                {/* News */}
                <TouchableOpacity style={news === true ? styles.optionSelected : styles.option} onPress={() => setNews(prev => !prev)}>
                    {/* <FontAwesome name='newspaper-o' size={18} color={colors.gray[200]}/> */}
                    {/* <Flaticon name='home' /> */}
                    <Text style={PreSets.tg}>Notícias</Text>
                    <View style={PreSets.spacer} />
                    <Feather
                        name={news === true ? 'check-circle' : 'circle'}
                        size={18}
                        color={news === true ? colors.primary : colors.gray[200]}
                    />
                </TouchableOpacity>

                {/* Economy */}
                <TouchableOpacity style={economy === true ? styles.optionSelected : styles.option} onPress={() => setEconomy(prev => !prev)}>
                    {/* <FontAwesome name='money' size={18} color={colors.gray[200]}/> */}
                    <Text style={PreSets.tg}>Bolsa de valores</Text>
                    <View style={PreSets.spacer} />
                    <Feather
                        name={economy === true ? 'check-circle' : 'circle'}
                        size={18}
                        color={economy === true ? colors.primary : colors.gray[200]}
                    />
                </TouchableOpacity>

                {/* Cripto */}
                <TouchableOpacity style={cripto === true ? styles.optionSelected : styles.option} onPress={() => setCripto(prev => !prev)}>
                    {/* <FontAwesome name='btc' size={18} color={colors.gray[200]}/> */}
                    <Text style={PreSets.tg}>Cripto moedas</Text>
                    <View style={PreSets.spacer} />
                    <Feather
                        name={cripto === true ? 'check-circle' : 'circle'}
                        size={18}
                        color={cripto === true ? colors.primary : colors.gray[200]}
                    />
                </TouchableOpacity>

                {/* Gossip */}
                <TouchableOpacity style={gossip === true ? styles.optionSelected : styles.option} onPress={() => setGossip(prev => !prev)}>
                    {/* <FontAwesome name='commenting-o' size={18} color={colors.gray[200]}/> */}
                    <Text style={PreSets.tg}>Fofocas</Text>
                    <View style={PreSets.spacer} />
                    <Feather
                        name={gossip === true ? 'check-circle' : 'circle'}
                        size={18}
                        color={gossip === true ? colors.primary : colors.gray[200]}
                    />
                </TouchableOpacity>

                {/* reading */}
                <TouchableOpacity style={reading === true ? styles.optionSelected : styles.option} onPress={() => setReading(prev => !prev)}>
                    {/* <FontAwesome name='file-o' size={18} color={colors.gray[200]}/> */}
                    <Text style={PreSets.tg}>Leitura de artigos</Text>
                    <View style={PreSets.spacer} />
                    <Feather
                        name={reading === true ? 'check-circle' : 'circle'}
                        size={18}
                        color={reading === true ? colors.primary : colors.gray[200]}
                    />
                </TouchableOpacity>

                {/* Music */}
                <TouchableOpacity style={music === true ? styles.optionSelected : styles.option} onPress={() => setMusic(prev => !prev)}>
                    {/* <FontAwesome name='music' size={18} color={colors.gray[200]}/> */}
                    <Text style={PreSets.tg}>Fofocas</Text>
                    <View style={PreSets.spacer} />
                    <Feather
                        name={music === true ? 'check-circle' : 'circle'}
                        size={18}
                        color={music === true ? colors.primary : colors.gray[200]}
                    />
                </TouchableOpacity>

                {/* Button */}
                <TouchableOpacity style={PreSets.b1} onPress={next}>
                    <Text style={PreSets.bt}>Continuar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    if (currentStep === 3 ){
        return (
            <View style={styles.content}>
                {/* Step */}
                <View style={styles.steps}>
                    <View style={styles.stepCompleted} />
                    <View style={styles.stepCompleted} />
                    <View style={styles.stepCurent} />
                    <View style={styles.step} />
                </View>

                {/* Input email */}
                <View style={PreSets.containerInput}>
                    <Text style={PreSets.label}>Nome</Text>
        
                    <View style={PreSets.contentInput}>
                        <Feather name="user" size={18} color={colors.gray[200]} />
                        <TextInput 
                            style={PreSets.input} 
                            placeholder='Informe seu nome' 
                            placeholderTextColor={colors.gray[400]} 
                            enterKeyHint='next'
                        />
                    </View>
                </View>

                {/* Input email */}
                <View style={PreSets.containerInput}>
                    <Text style={PreSets.label}>Email</Text>
                    <View style={PreSets.contentInput}>
                        <Feather name="mail" size={18} color={colors.gray[200]} />
                        <TextInput 
                            style={PreSets.input} 
                            placeholder='Informe seu email' 
                            placeholderTextColor={colors.gray[400]} 
                            enterKeyHint='next'
                        />
                    </View>
                </View>

                {/* Input password */}
                <View style={PreSets.containerInput}>
                    <Text style={PreSets.label}>Senha</Text>
                    <View style={PreSets.contentInput}>
                        <Feather name="lock" size={18} color={colors.gray[200]} />
                        <TextInput 
                            style={PreSets.input} 
                            placeholder='Informe uma senha' 
                            placeholderTextColor={colors.gray[400]} 
                            enterKeyHint='next'
                            secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Feather name={passwordVisible ? 'eye' : 'eye-off'} size={18} color={colors.gray[200]} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Input password */}
                <View style={PreSets.containerInput}>
                    <Text style={PreSets.label}>Senha</Text>
                    <View style={PreSets.contentInput}>
                        <Feather name="lock" size={18} color={colors.gray[200]} />
                        <TextInput 
                            style={PreSets.input} 
                            placeholder='Informe uma senha' 
                            placeholderTextColor={colors.gray[400]} 
                            enterKeyHint='next'
                            secureTextEntry={!confirmVisible}
                        />
                        <TouchableOpacity onPress={() => setConfirmVisible(!confirmVisible)}>
                            <Feather name={confirmVisible ? 'eye' : 'eye-off'} size={18} color={colors.gray[200]} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Button */}
                <TouchableOpacity style={PreSets.b1} onPress={next}>
                    <Text style={PreSets.bt}>Continuar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    if (currentStep === 4 ){
            return (
                <View style={styles.content}>
                {/* Step */}
                <View style={styles.steps}>
                    <View style={styles.stepCompleted} />
                    <View style={styles.stepCompleted} />
                    <View style={styles.stepCompleted} />
                    <View style={styles.stepCurent} />
                </View>

                    {/* Information */}
                    <View style={styles.gift}>
                        <Feather name='gift' size={18} color={colors.white}/>
                        <Text style={PreSets.tw}>Teste por 1 mês grátis</Text>
                    </View>



                    {/* Input name */}
                    <View style={PreSets.containerInput}>
                        <Text style={PreSets.label}>Nome</Text>
                        <View style={PreSets.contentInput}>
                            <Feather name="user" size={18} color={colors.gray[200]} />
                            <TextInput 
                                style={PreSets.input} 
                                placeholder='Informe o nome no cartão' 
                                placeholderTextColor={colors.gray[400]} 
                                enterKeyHint='next'
                            />
                        </View>
                    </View>

                    {/* Input number */}
                    <View style={PreSets.containerInput}>
                        <Text style={PreSets.label}>Número</Text>
                        <View style={PreSets.contentInput}>
                            <Feather name="credit-card" size={18} color={colors.gray[200]} />
                            <TextInput 
                                style={PreSets.input} 
                                placeholder='000 000 000 00' 
                                placeholderTextColor={colors.gray[400]} 
                                enterKeyHint='next'
                            />
                            <FontAwesome name='cc-visa' size={18} color={colors.gray[200]} />
                        </View>
                    </View>

                    <View style={PreSets.row}>
                        {/* Input CVV */}
                        <View style={PreSets.containerInput}>
                            <Text style={PreSets.label}>CVV</Text>
                            <View style={PreSets.contentInput}>
                                <Feather name="key" size={18} color={colors.gray[200]} />
                                <TextInput 
                                    style={PreSets.input} 
                                    placeholder='000' 
                                    placeholderTextColor={colors.gray[400]} 
                                    enterKeyHint='next'
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>

                        {/* Input validate */}
                        <View style={PreSets.containerInput}>
                            <Text style={PreSets.label}>Validade</Text>
                            <View style={PreSets.contentInput}>
                                <Feather name="calendar" size={18} color={colors.gray[200]} />
                                <TextInput 
                                    style={PreSets.input} 
                                    placeholder='00/00' 
                                    placeholderTextColor={colors.gray[400]} 
                                    enterKeyHint='next'
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                    </View>

                    {/* Security */}
                    <View style={styles.row}>
                        <Feather name='shield' size={16} color={colors.gray[200]}/>
                        <Text style={PreSets.label}>Sua compra está segura
                            <Pressable>
                                <Text style={PreSets.pressable}>Saiba mais</Text>
                            </Pressable>
                        </Text>
                    </View>
                    
                    {/* Button */}
                    <TouchableOpacity style={PreSets.b1}>
                        <Text style={PreSets.bt}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            )
    }

    else {return null}
} 