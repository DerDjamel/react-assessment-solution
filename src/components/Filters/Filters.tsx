import { useState } from 'react'
import useTranslation from 'i18n/hooks/useTranslation'
import searchIcon from 'assets/icons/searchIcon'
import { useTableFiltersContext } from 'contexts/TableFiltersContext'
import Chip from 'components/shared/Chip'
import Select from 'components/shared/Select'
import Input from 'components/shared/Input'
import { IFilters, ITicketOption } from './Filters.types'

function Filters({ ticketsOptions }: IFilters) {
  const t = useTranslation()
  const { handleSearch, handleFilter, filter } = useTableFiltersContext()

  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    handleSearch(e.target.value)
  }
  return (
    <div className="flexRow filters-container">
      <Select
        options={ticketsOptions}
        renderItem={(item) => (
          <div className="flexRow ticket-filter-item gap">
            <p>
              {t(item.text)} {t('TICKETS_2')}
            </p>
            <Chip
              color={item.color}
              backgroundColor={item.bgColor}
              label={item.count}
            />
          </div>
        )}
        onChange={(e, item) => handleFilter(item as ITicketOption)}
        value={filter}
        getOptionSelected={(item) => item.value === filter.value}
      />
      <Input
        icon={searchIcon}
        placeholder={t('SEARCH_TICKETS')}
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Filters
