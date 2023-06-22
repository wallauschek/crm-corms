'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import formAdmissaoStore from '@/store/formAdmissaoStore'

import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Steps } from 'primereact/steps'
import { MenuItem } from 'primereact/menuitem'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import { MultiSelect } from 'primereact/multiselect'

interface Serie {
  name: string
  code: string
}
interface Segmento {
  name: string
  code: string
  series: Serie[]
}
interface Option {
  code: string
  name: string
  segmentos: Segmento[]
}

const FormAdmissao = observer(() => {
  const { register, handleSubmit, setValue, watch } = useForm()
  const router = useRouter()

  const isFormValid =
    watch('nomeCandidato') &&
    watch('dataNascimentoCandidato') &&
    watch('escolaAtualCandidato') &&
    watch('situacaoCandidato')

  const [selectedUnidade, setSelectedUnidade] = useState(null) as any
  const [selectedSegmento, setSelectedSegmento] = useState(null) as any
  const [selectedSerie, setSelectedSerie] = useState(null) as any
  const [novoCandidato, setNovoCandidato] = useState(false)

  const options = [
    {
      name: 'Maria Angélica - Jardim Botânico',
      code: 'MA',
      segmentos: [
        {
          name: 'Ensino Fundamental II',
          code: 'EFII',
          series: [
            { name: '6º Ano', code: '6A' },
            { name: '7º Ano', code: '7A' },
            { name: '8º Ano', code: '8A' },
            { name: '9º Ano', code: '9A' },
          ],
        },
        {
          name: 'Ensino Médio',
          code: 'EM',
          series: [
            { name: '1ª Série', code: '1S' },
            { name: '2ª Série', code: '2S' },
            { name: '3ª Série', code: '3S' },
          ],
        },
      ],
    },
    {
      name: 'Lopes Quintas - Jardim Botânico',
      code: 'LQ',
      segmentos: [
        {
          name: 'Educação Infantil',
          code: 'EI',
          series: [
            { name: 'Maternal I', code: 'MT1' },
            { name: 'Maternal II', code: 'MT2' },
            { name: 'Pré-Escola I', code: 'PE1' },
            { name: 'Pré-Escola II', code: 'PE2' },
          ],
        },
        {
          name: 'Ensino Fundamental I',
          code: 'EFI',
          series: [
            { name: '1º Ano', code: '1A' },
            { name: '2º Ano', code: '2A' },
            { name: '3º Ano', code: '3A' },
            { name: '4º Ano', code: '4A' },
            { name: '5º Ano', code: '5A' },
          ],
        },
      ],
    },
    {
      name: 'Barra da Tijuca',
      code: 'BA',
      segmentos: [
        {
          name: 'Educação Infantil',
          code: 'EI',
          series: [
            { name: 'Maternal I', code: 'MT1' },
            { name: 'Maternal II', code: 'MT2' },
            { name: 'Pré-Escola I', code: 'PE1' },
            { name: 'Pré-Escola II', code: 'PE2' },
          ],
        },
        {
          name: 'Ensino Fundamental I',
          code: 'EFI',
          series: [
            { name: '1º Ano', code: '1A' },
            { name: '2º Ano', code: '2A' },
            { name: '3º Ano', code: '3A' },
            { name: '4º Ano', code: '4A' },
            { name: '5º Ano', code: '5A' },
          ],
        },
        {
          name: 'Ensino Fundamental II',
          code: 'EFII',
          series: [
            { name: '6º Ano', code: '6A' },
            { name: '7º Ano', code: '7A' },
            { name: '8º Ano', code: '8A' },
            { name: '9º Ano', code: '9A' },
          ],
        },
        {
          name: 'Ensino Médio',
          code: 'EM',
          series: [
            { name: '1ª Série', code: '1S' },
            { name: '2ª Série', code: '2S' },
            { name: '3ª Série', code: '3S' },
          ],
        },
      ],
    },
    {
      name: 'Norte Shopping',
      code: 'NS',
      segmentos: [
        {
          name: 'Educação Infantil',
          code: 'EI',
          series: [
            { name: 'Maternal I', code: 'MT1' },
            { name: 'Maternal II', code: 'MT2' },
            { name: 'Pré-Escola I', code: 'PE1' },
            { name: 'Pré-Escola II', code: 'PE2' },
          ],
        },
        {
          name: 'Ensino Fundamental I',
          code: 'EFI',
          series: [
            { name: '1º Ano', code: '1A' },
            { name: '2º Ano', code: '2A' },
            { name: '3º Ano', code: '3A' },
            { name: '4º Ano', code: '4A' },
            { name: '5º Ano', code: '5A' },
          ],
        },
        {
          name: 'Ensino Fundamental II',
          code: 'EFII',
          series: [
            { name: '6º Ano', code: '6A' },
            { name: '7º Ano', code: '7A' },
            { name: '8º Ano', code: '8A' },
            { name: '9º Ano', code: '9A' },
          ],
        },
        {
          name: 'Ensino Médio',
          code: 'EM',
          series: [
            { name: '1ª Série', code: '1S' },
            { name: '2ª Série', code: '2S' },
            { name: '3ª Série', code: '3S' },
          ],
        },
      ],
    },
  ]

  const situacoesCandidato = [
    {
      name: 'É filho(a) de colaborador do CEL Intercultural School.',
      code: 'É filho(a) de colaborador do CEL Intercultural School.',
    },
    {
      name: 'Possui irmão atualmente matriculado no CEL Intercultural School.',
      code: 'Possui irmão atualmente matriculado no CEL Intercultural School.',
    },
    {
      name: 'É filho(a) de ex-aluno do CEL Intercultural School.',
      code: 'É filho(a) de ex-aluno do CEL Intercultural School.',
    },
    {
      name: 'É filho(a) de colaborador do CEL Intercultural School?',
      code: 'É filho(a) de colaborador do CEL Intercultural School?',
    },
    {
      name: 'Possui irmão atualmente matriculado no CEL Intercultural School?',
      code: 'Possui irmão atualmente matriculado no CEL Intercultural School?',
    },
    {
      name: 'É filho(a) de ex-aluno do CEL Intercultural School?',
      code: 'É filho(a) de ex-aluno do CEL Intercultural School?',
    },
    {
      name: 'Não se encaixa em nenhuma das opções.',
      code: 'Não se encaixa em nenhuma das opções.',
    },
  ]

  const unidades = options.map((option) => ({
    name: option.name,
    code: option.code,
  }))

  const segmentos = selectedUnidade
    ? options
        .find(
          (option): option is Option & { code: string } =>
            !!option.code && option.code === selectedUnidade.code,
        )
        ?.segmentos?.map((segmento) => ({
          name: segmento.name,
          code: segmento.code,
          series: segmento.series?.filter(
            (serie): serie is Serie & { code: string } => !!serie.code,
          ),
        })) || []
    : []

  const series =
    selectedSegmento && selectedUnidade && options
      ? options
          .find(
            (option): option is Option & { code: string } =>
              !!option.code && option.code === selectedUnidade.code,
          )
          ?.segmentos?.find(
            (segmento): segmento is Segmento & { code: string } =>
              !!segmento.code && segmento.code === selectedSegmento.code,
          )
          ?.series?.filter(
            (serie): serie is Serie & { code: string } => !!serie.code,
          ) || []
      : []

  const onSubmit: SubmitHandler<FieldValues> = (data, event) => {
    if (isFormValid) {
      event?.preventDefault()
      const candidato = {
        nomeCandidato: data.nomeCandidato,
        dataNascimentoCandidato: data.dataNascimentoCandidato,
        unidadeCandidato: selectedUnidade.name,
        segmentoCandidato: selectedSegmento.name,
        serieCandidato: selectedSerie.name,
        escolaAtualCandidato: data.escolaAtualCandidato,
        situacaoCandidato: data.situacaoCandidato,
      }
      formAdmissaoStore.addCandidato(candidato)
      if (novoCandidato) {
        router.push('/processo-admissao/candidatos')
      } else {
        router.push('/processo-admissao/confirmacao')
      }
    } else {
      router.push('/processo-admissao/confirmacao')
    }
  }

  const items: MenuItem[] = [
    {
      label: 'Responsável',
      url: '/processo-admissao/responsavel',
    },
    {
      label: 'Candidatos',
      url: '/processo-admissao/candidatos',
    },
    {
      label: 'Confirmação',
      url: '/processo-admissao/confirmacao',
    },
  ]

  return (
    <div className="max-w-screen-lg mx-auto pb-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg mx-auto"
      >
        <Steps model={items} activeIndex={1} />
        <h2 className="text-xl font-semibold">Dados do candidato</h2>

        <div className="mt-8">
          <span className="p-float-label">
            <InputText
              id="nomeCandidato"
              {...register('nomeCandidato')}
              className="w-full"
            />
            <label htmlFor="nomeCandidato">Nome do candidato</label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <InputMask
              id="dataNascimentoCandidato"
              {...register('dataNascimentoCandidato')}
              className="w-full"
              mask="99/99/9999"
              onMouseUp={(event) => {
                const input = event.target as HTMLInputElement
                input.setSelectionRange(0, 0)
              }}
            />
            <label htmlFor="dataNascimentoCandidato">
              Data de nascimento do candidato
            </label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <Dropdown
              value={selectedUnidade}
              options={unidades}
              optionLabel="name"
              placeholder="Selecione a unidade de desejo"
              className="w-full"
              onChange={(event) => {
                setSelectedUnidade(event.value)
                setSelectedSegmento(null)
                setSelectedSerie(null)
              }}
            />
            <label htmlFor="unidade">Unidade desejada</label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <Dropdown
              value={selectedSegmento}
              options={segmentos}
              optionLabel="name"
              placeholder="Selecione o segmento de desejo"
              className="w-full mt-4"
              onChange={(event) => {
                setSelectedSegmento(event.value)
                setSelectedSerie(null)
              }}
              disabled={!selectedUnidade}
            />
            <label htmlFor="segmento">Segmento desejado</label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <Dropdown
              value={selectedSerie}
              options={series}
              optionLabel="name"
              placeholder="Selecione a série de desejo"
              className="w-full mt-4"
              onChange={(event) => {
                setSelectedSerie(event.value)
              }}
              disabled={!selectedSegmento}
            />
            <label htmlFor="anoSerieCandidato">Série/Ano desejada(o)</label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <InputText
              id="escolaAtualCandidato"
              {...register('escolaAtualCandidato')}
              className="w-full"
            />
            <label htmlFor="escolaAtualCandidato">
              Nome da escola atual do candidato
            </label>
          </span>
        </div>

        <div className="mt-8">
          <span className="p-float-label">
            <MultiSelect
              options={situacoesCandidato}
              optionLabel="name"
              placeholder="Selecione as situações que se aplicam ao candidato"
              className="w-full md:w-20rem"
              id="situacaoCandidato"
              value={watch('situacaoCandidato')}
              onChange={(event) => {
                setValue('situacaoCandidato', event.value)
              }}
            />
            <label htmlFor="situacaoCandidato">
              Situação do candidato (selecione todas que se aplicam)
            </label>
          </span>
        </div>

        <div className="mt-8">
          <div className="mt-8" style={{ display: 'flex' }}>
            <Button
              type="submit"
              id="add-candidate-btn"
              onClick={() => {
                setNovoCandidato(true)
              }}
              disabled={!isFormValid}
              style={{ flex: 1 }}
            >
              Adicionar novo candidato
            </Button>
            <Button
              type="submit"
              className="p-button-success justify-center"
              onClick={() => {
                setNovoCandidato(false)
              }}
              disabled={
                !isFormValid && formAdmissaoStore.candidatos.length === 0
              }
              style={{ flex: 1 }}
            >
              Concluir
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
})

export default FormAdmissao
