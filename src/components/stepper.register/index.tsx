import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { styles } from './styles';
import { PreSets } from '@/styles/preSets';
import { colors } from '@/styles/colors';


export function StepperRegister () {
    const steps = [1, 2, 3, 4];
    const [currentStep, setCurrentStep] = useState(steps[0])
    const next = () => {
        setCurrentStep(currentStep + 1)
    }

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);

    const [news, setNews] = useState(false);
    const [economy, setEconomy] = useState(false);
    const [cripto, setCripto] = useState(false);
    const [gossip, setGossip] = useState(false);
    const [reading, setReading] = useState(false);
    const [music, setMusic] = useState(false);

        if (currentStep === 1 ){
            return (
                <View style={styles.content}>
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

                    <View style={styles.footer}>
                    <Text style={PreSets.label}>
                        Já possui uma conta? 
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
                    <TouchableOpacity onPress={() => setNews(prev => !prev)}>
                        <Feather name='layers'/>
                        <Text>Notícias</Text>
                        <Feather
                            name={news === true ? 'check-circle' : 'circle'}
                            size={24}
                            color={news === true ? 'blue' : 'gray'}
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
    
                        {/* Button */}
                        <TouchableOpacity style={PreSets.b1}>
                            <Text style={PreSets.bt}>Confirmar pagamento</Text>
                        </TouchableOpacity>
                    </View>
                )
        }

        else {return null}
} 