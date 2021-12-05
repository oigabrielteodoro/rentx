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
  colorToDot: (stageToCompare: Stage) => string
  handleOnChangeStage: (newStage: Stage) => void
}

const SignUpContext = createContext({} as SignUpContextData)

export function SignUpProvider({ children }: Props) {
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
      value={{ actualStage, colorToDot, handleOnChangeStage: setActualStage }}
    >
      {children}
    </SignUpContext.Provider>
  )
}

export const useSignUp = () => useContext(SignUpContext)
