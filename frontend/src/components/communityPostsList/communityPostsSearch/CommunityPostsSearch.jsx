import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import SearchIcon from '../../../assets/SearchIcon';
import FilterIcon from '../../../assets/FilterIcon';

const searchOptions = [
  { value: 'all', label: 'All Fields' },
  { value: 'title', label: 'Title' },
  { value: 'author', label: 'Author' },
  { value: 'category', label: 'Category' }
];

const CommunityPostsSearch = ({ onSearch }) => {

  const [mode, setMode] = useState(searchOptions[0]);
  const [currentInput, setCurrentInput] = useState("");

  const BASE_URL = import.meta.env.VITE_BASE_SERVER_URL;

  const loadOptions = async (inputValue) => {
    if (inputValue.length < 2) return [];

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${BASE_URL}/blogPosts?page=1&pageSize=10&search=${encodeURIComponent(inputValue)}&searchMode=${mode.value}`,
        { headers: { "Authorization": `Bearer ${token}` } }
      );

      const data = await response.json();

      const fetchedOptions = data?.blogPosts.map(post => ({
        value: post._id,
        label: post.title,
        author: `${post.user?.name} ${post.user?.surname}`,
        category: post.category,
        isPost: true
      })) || [];

      return [
        {
          value: 'search_all',
          label: `Show all results for "${inputValue}"`,
          isSearchAll: true,
          queryText: inputValue
        },
        ...fetchedOptions
      ];
    } catch (error) {
      console.error("Error loading dropdown options:", error);
      return [];
    }
  };

  const handleSelectChange = (option) => {
    if (!option) {
      onSearch({ text: "", mode: mode.value });
      setCurrentInput("");
      return;
    }

    if (option.isPost) {
      const val = option.label;
      setCurrentInput(val);
      onSearch({ text: val, mode: "title" });
    } else {
      const val = option.queryText;
      setCurrentInput(val);
      onSearch({ text: val, mode: mode.value });
    }
  };


  const handleModeChange = (newMode) => {
    setMode(newMode);
    if (currentInput) {
      onSearch({ text: currentInput, mode: newMode.value });
    }
  };

  return (
    <div className="d-flex gap-2 mb-4 align-items-end w-100">
      <div
        className='w-50'
      >
        <Form.Label className="small fw-bold d-flex align-items-center gap-2">
          <FilterIcon />
          Search In
        </Form.Label>
        <Select
          options={searchOptions}
          value={mode}
          onChange={handleModeChange}
          classNamePrefix="react-select"
        />
      </div>

      <AsyncSelect
        className='w-100'
        key={mode.value}
        cacheOptions
        loadOptions={loadOptions}
        onChange={handleSelectChange}
        onInputChange={(value, { action }) => {
          if (action === 'input-change') {
            setCurrentInput(value);
            onSearch({ text: value, mode: mode.value });
          }
        }}
        placeholder="Search by title or author..."
        isClearable
        classNamePrefix="react-select"
        formatOptionLabel={(option) => (
          <div className="d-flex flex-column justify-content-between align-items-start">
            {option.isSearchAll ? (
              <span className="fw-bold text-dark d-flex align-items-center gap-2"><SearchIcon /> {option.label}</span>
            ) : (
              <>
                <span>{option.label}</span>
                <small className="text-muted small fw-bold">
                  by {option.author}
                </small>
              </>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default CommunityPostsSearch