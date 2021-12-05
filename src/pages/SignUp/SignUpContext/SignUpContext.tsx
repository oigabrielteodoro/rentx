import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactNode,
} from 'react'
import { theme } from '~/ui'

type Props = {
  children: ReactNode
}

type Stage = 'user' | 'password'

type SignUpContextData = {
  actualStage: Stage
  direction?: Stage
  isSuccess: boolean
  colorToDot: (stageToCompare: Stage) => string
  handleMoveToLeft: () => void
  handleMoveToRight: () => void
  handleOnChangeStage: (newStage: Stage) => void
  handleSuccess: () => void
}

const SignUpContext = createContext({} as SignUpContextData)

export function SignUpProvider({ children }: Props) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [direction, setDirection] = useState<Stage>()
  const [actualStage, setActualStage] = useState<Stage>('user')

  const colorToDot = useCallback(
    (stageToCompare: Stage) => {
      if (actualStage === stageToCompare) {
        return theme.colors.neutral[900]
      }

      return theme.colors.neutral[400]
    },
    [actualStage],
  )

  return (
    <SignUpContext.Provider
      value={{
        direction,
        actualStage,
        isSuccess,
        colorToDot,
        handleOnChangeStage: setActualStage,
        handleMoveToLeft: () => setDirection('user'),
        handleMoveToRight: () => setDirection('password'),
        handleSuccess: () => setIsSuccess(true),
      }}
    >
      {children}
    </SignUpContext.Provider>
  )
}

export const useSignUp = () => useContext(SignUpContext)
