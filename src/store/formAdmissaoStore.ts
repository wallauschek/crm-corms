import { makeAutoObservable, observable, action } from 'mobx'

interface Candidato {
  nomeCandidato: string
  dataNascimentoCandidato: string
  unidadeCandidato: string
  segmentoCandidato: string
  serieCandidato: string
  escolaAtualCandidato: string
  situacaoCandidato: string[]
}

interface responsavel {
  nomeResponsavel: string
  cpfResponsavel: string
  emailResponsavel: string
  celularResponsavel: string
  enderecoResponsavel: string
  motivoEscolhaResponsavel: string
}
class FormAdmissaoStore {
  responsavel = {} as responsavel
  candidatos = [] as Candidato[]

  constructor() {
    makeAutoObservable(this, {
      responsavel: observable,
      candidatos: observable,
      setResponsavel: action,
      addCandidato: action,
    })
  }

  setResponsavel(responsavel: responsavel) {
    this.responsavel = responsavel
  }

  addCandidato(candidato: Candidato) {
    this.candidatos.push(candidato)
  }
}

export default new FormAdmissaoStore()
