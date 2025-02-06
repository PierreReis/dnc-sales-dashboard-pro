/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// COMPONENTS
import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledUl,
  StyledP,
} from '@/components'

// UTILS
import { pxToRem } from '@/utils'

// TYPES
import { CreateProfileData, InputProps } from '@/types'

// HOOKS
import { useFormValidation, usePost } from '@/hooks'

// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { setMessage, setProfileData } from '@/redux/slices/createProfile'

function Registration() {
  const dispach = useDispatch()
  const navigate = useNavigate()
  const { email } = useSelector((state: RootState) => state.createProfile)
  const { data, loading, error, postData } = usePost<string, CreateProfileData>(
    'profile/create'
  )

  // FORM STEP 1
  const step1Inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
    },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault()
    dispach(
      setProfileData({
        email: String(step1FormValues[1]),
      })
    )
  }

  const {
    formValues: step1FormValues,
    formValid: step1FormValid,
    handleChange: step1FormHandleChange,
  } = useFormValidation(step1Inputs)

  // FORM STEP 2
  const step2Inputs: InputProps[] = [{ type: 'password', placeholder: 'Senha' }]

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      name: String(step1FormValues[0]),
      email: String(step1FormValues[1]),
      phone: String(step1FormValues[2]),
      password: String(step2FormValues[0]),
    })
  }

  const {
    formValues: step2FormValues,
    formValid: step2FormValid,
    handleChange: step2FormHandleChange,
  } = useFormValidation(step2Inputs)

  const handleStepInputs = email ? step2Inputs : step1Inputs

  useEffect(() => {
    if (data !== null) {
      dispach(setMessage('Usuário criado com sucesso!'))
      navigate('/')
    } else if (error) {
      alert(
        `Não foi possível realizar a operação. Entre em contato com o nosso suporte (${error}).`
      )
    }
  }, [data, error, navigate])

  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>
                  {email ? 'Defina a sua senha' : 'Faça seu cadastro'}
                </StyledH1>
                <StyledP>
                  {' '}
                  {email
                    ? 'Sua senha deve ter:'
                    : 'Primeiro, diga-nos quem você é.'}
                </StyledP>
                {email && (
                  <StyledUl>
                    <li>Entre 8 e 16 caracteres;</li>
                    <li>Pelo menos uma letra maiúscula;</li>
                    <li>Pelo menos um caractere especial;</li>
                    <li>Pelo menos um número</li>
                  </StyledUl>
                )}
              </Box>
              <FormComponent
                inputs={handleStepInputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: email
                    ? step2FormValues[index] || ''
                    : step1FormValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    email
                      ? step2FormHandleChange(
                          index,
                          (e.target as HTMLInputElement).value
                        )
                      : step1FormHandleChange(
                          index,
                          (e.target as HTMLInputElement).value
                        ),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: email
                      ? !step2FormValid || loading
                      : !step1FormValid,
                    onClick: email ? handleStep2 : handleStep1,
                    type: 'submit',
                    children: email ? 'Enviar' : 'Próximo',
                  },
                ]}
              />
            </Container>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
