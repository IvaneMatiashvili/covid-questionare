import { Controller } from 'react-hook-form'
import HaveCovid from './HaveCovid'
import HaveAntibodies from './HaveAntibodies'
import CovidSicknessDate from './CovidSicknessDate'
import 'react-datepicker/dist/react-datepicker.css'
import TestAndAntibodies from './TestAndAntibodies'
import { RightArrow, LeftArrow, Error } from '@/components'
import { useCovidQuestionnairePageForm } from './useCovidQuestionnairePageForm.js'

const Form = () => {
  const {
    form,
    FormProvider,
    handleSubmit,
    errors,
    watchCovidSicknessDate,
    watchTestDate,
    watchHaveCovid,
    watchHaveAntibodies,
    control,
    navigateLeft,
    navigateRight,
  } = useCovidQuestionnairePageForm()
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(navigateRight)}>
        <HaveCovid />

        <Error errors={errors} name='have_covid' />
        {watchHaveCovid === 'yes' && <HaveAntibodies />}
        {watchHaveCovid === 'yes' && (
          <Error errors={errors} name='have_antibodies' />
        )}

        {watchHaveAntibodies === 'no' && watchHaveCovid === 'yes' && (
          <CovidSicknessDate
            watch={watchCovidSicknessDate}
            controller={Controller}
            control={control}
          />
        )}

        {watchHaveAntibodies === 'no' && watchHaveCovid === 'yes' && (
          <Error errors={errors} name='covid_sicknessDate' />
        )}

        {watchHaveAntibodies === 'yes' && watchHaveCovid === 'yes' && (
          <TestAndAntibodies
            watch={watchTestDate}
            controller={Controller}
            control={control}
          />
        )}
        {watchHaveAntibodies === 'yes' && watchHaveCovid === 'yes' && (
          <Error errors={errors} name='antibodies_quantity' />
        )}

        <button type='submit' className='absolute left-[55%] bottom-[5%]'>
          <RightArrow />
        </button>
        <div
          className='absolute left-1/2 bottom-[5%] cursor-pointer'
          onClick={navigateLeft}
        >
          <LeftArrow />
        </div>
      </form>
    </FormProvider>
  )
}

export default Form
