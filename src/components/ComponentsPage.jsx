import React, { useState } from 'react';
import { useDarkModeStyles } from '../hooks/useDarkModeStyles';
import {
  ButtonDemo,
  CardDemo,
  InputDemo,
  NumberInputDemo,
  ModalDemo,
  DrawerDemo,
  SpinnerDemo,
  AccordionDemo,
  AutocompleteDemo,
  AlertDemo,
  AvatarDemo,
  BadgeDemo,
  BreadcrumbsDemo,
  CalendarDemo,
  RangeCalendarDemo,
  DatePickerDemo,
  DateRangePickerDemo,
  CheckboxDemo,
  CheckboxGroupDemo,
  RadioGroupDemo,
  ChipDemo,
  ProgressDemo,
  CircularProgressDemo,
  CodeDemo,
  SnippetDemo,
  DividerDemo,
  DropdownDemo,
  SelectDemo,
  PaginationDemo,
  PopoverDemo,
  SliderDemo,
  SwitchDemo,
  SkeletonDemo,
  SpacerDemo,
  ScrollShadowDemo,
  TableDemo,
  TabsDemo,
  ToastDemo,
  TextareaDemo,
  TimeInputDemo,
  TooltipDemo,
  UserDemo,
} from './index';

export const ComponentsPage = ({ darkMode, setDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeComponent, setActiveComponent] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useDarkModeStyles(darkMode);

  const components = [
    { name: 'Button', id: 'button', category: 'Form' },
    { name: 'Card', id: 'card', category: 'Layout' },
    { name: 'Input', id: 'input', category: 'Form' },
    { name: 'Modal', id: 'modal', category: 'Overlay' },
    { name: 'Spinner', id: 'spinner', category: 'Feedback' },
    { name: 'Accordion', id: 'accordion', category: 'Layout' },
    { name: 'Autocomplete', id: 'autocomplete', category: 'Form' },
    { name: 'Alert', id: 'alert', category: 'Feedback' },
    { name: 'Avatar', id: 'avatar', category: 'Display' },
    { name: 'Badge', id: 'badge', category: 'Display' },
    { name: 'Breadcrumbs', id: 'breadcrumbs', category: 'Navigation' },
    { name: 'Calendar', id: 'calendar', category: 'Form' },
    { name: 'Checkbox', id: 'checkbox', category: 'Form' },
    { name: 'CheckboxGroup', id: 'checkboxgroup', category: 'Form' },
    { name: 'Chip', id: 'chip', category: 'Display' },
    { name: 'CircularProgress', id: 'circularprogress', category: 'Feedback' },
    { name: 'Code', id: 'code', category: 'Display' },
    { name: 'DatePicker', id: 'datepicker', category: 'Form' },
    { name: 'DateRangePicker', id: 'daterangepicker', category: 'Form' },
    { name: 'Divider', id: 'divider', category: 'Layout' },
    { name: 'Dropdown', id: 'dropdown', category: 'Form' },
    { name: 'Drawer', id: 'drawer', category: 'Overlay' },
    { name: 'NumberInput', id: 'numberinput', category: 'Form' },
    { name: 'Pagination', id: 'pagination', category: 'Navigation' },
    { name: 'Popover', id: 'popover', category: 'Overlay' },
    { name: 'Progress', id: 'progress', category: 'Feedback' },
    { name: 'RadioGroup', id: 'radiogroup', category: 'Form' },
    { name: 'RangeCalendar', id: 'rangecalendar', category: 'Form' },
    { name: 'ScrollShadow', id: 'scrollshadow', category: 'Layout' },
    { name: 'Select', id: 'select', category: 'Form' },
    { name: 'Skeleton', id: 'skeleton', category: 'Feedback' },
    { name: 'Slider', id: 'slider', category: 'Form' },
    { name: 'Snippet', id: 'snippet', category: 'Display' },
    { name: 'Spacer', id: 'spacer', category: 'Layout' },
    { name: 'Switch', id: 'switch', category: 'Form' },
    { name: 'Table', id: 'table', category: 'Display' },
    { name: 'Tabs', id: 'tabs', category: 'Layout' },
    { name: 'Toast', id: 'toast', category: 'Feedback' },
    { name: 'Textarea', id: 'textarea', category: 'Form' },
    { name: 'TimeInput', id: 'timeinput', category: 'Form' },
    { name: 'Tooltip', id: 'tooltip', category: 'Overlay' },
    { name: 'User', id: 'user', category: 'Display' },
  ];

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToComponent = (component) => {
    const componentId = typeof component === 'string' ? component.toLowerCase() : component.id;
    const element = document.getElementById(`component-${componentId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveComponent(componentId);
    }
  };

  const componentMap = {
    button: <ButtonDemo />,
    card: <CardDemo />,
    input: <InputDemo />,
    numberinput: <NumberInputDemo />,
    modal: <ModalDemo />,
    drawer: <DrawerDemo />,
    spinner: <SpinnerDemo />,
    accordion: <AccordionDemo />,
    autocomplete: <AutocompleteDemo />,
    alert: <AlertDemo />,
    avatar: <AvatarDemo />,
    badge: <BadgeDemo />,
    breadcrumbs: <BreadcrumbsDemo />,
    calendar: <CalendarDemo />,
    rangecalendar: <RangeCalendarDemo />,
    datepicker: <DatePickerDemo />,
    daterangepicker: <DateRangePickerDemo />,
    checkbox: <CheckboxDemo />,
    checkboxgroup: <CheckboxGroupDemo />,
    radiogroup: <RadioGroupDemo />,
    chip: <ChipDemo />,
    progress: <ProgressDemo />,
    circularprogress: <CircularProgressDemo />,
    code: <CodeDemo />,
    snippet: <SnippetDemo />,
    divider: <DividerDemo />,
    dropdown: <DropdownDemo />,
    select: <SelectDemo />,
    pagination: <PaginationDemo />,
    popover: <PopoverDemo />,
    slider: <SliderDemo />,
    switch: <SwitchDemo />,
    skeleton: <SkeletonDemo />,
    spacer: <SpacerDemo />,
    scrollshadow: <ScrollShadowDemo />,
    table: <TableDemo />,
    tabs: <TabsDemo />,
    toast: <ToastDemo />,
    textarea: <TextareaDemo />,
    timeinput: <TimeInputDemo />,
    tooltip: <TooltipDemo />,
    user: <UserDemo />,
  };

  return (
    <div className="flex min-h-screen pt-16">
      {/* Modern Sidebar */}
      <aside className={`fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto z-40 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-1">
            {filteredComponents.map((component) => (
              <button
                key={component.id}
                onClick={() => scrollToComponent(component)}
                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  activeComponent === component.id
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium border-l-4 border-blue-600 dark:border-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {component.name}
              </button>
            ))}
          </div>
          {filteredComponents.length === 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
              No components found
            </p>
          )}
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-20 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
        aria-label="Toggle sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Main Content */}
      <main className="md:ml-64 flex-1 min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-8 py-12">
          <div id="components" className="space-y-24">
            {components.map((component) => (
              <section
                key={component.id}
                id={`component-${component.id}`}
                className="scroll-mt-24"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {component.name}
                    </h2>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">
                      {component.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Explore the {component.name} component with interactive examples
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm dark:shadow-none">
                  {componentMap[component.id]}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

