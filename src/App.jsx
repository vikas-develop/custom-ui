import React from 'react';
import { Navbar } from '@vk-develop/custom-ui';
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
} from './components';
import './App.css';

function App() {
  const components = [
    { name: 'Button', id: 'button' },
    { name: 'Card', id: 'card' },
    { name: 'Input', id: 'input' },
    { name: 'Modal', id: 'modal' },
    { name: 'Spinner', id: 'spinner' },
    { name: 'Accordion', id: 'accordion' },
    { name: 'Autocomplete', id: 'autocomplete' },
    { name: 'Alert', id: 'alert' },
    { name: 'Avatar', id: 'avatar' },
    { name: 'Badge', id: 'badge' },
    { name: 'Breadcrumbs', id: 'breadcrumbs' },
    { name: 'Calendar', id: 'calendar' },
    { name: 'Checkbox', id: 'checkbox' },
    { name: 'CheckboxGroup', id: 'checkboxgroup' },
    { name: 'Chip', id: 'chip' },
    { name: 'CircularProgress', id: 'circularprogress' },
    { name: 'Code', id: 'code' },
    { name: 'DateInput', id: 'dateinput' },
    { name: 'DatePicker', id: 'datepicker' },
    { name: 'DateRangePicker', id: 'daterangepicker' },
    { name: 'Divider', id: 'divider' },
    { name: 'Dropdown', id: 'dropdown' },
    { name: 'Drawer', id: 'drawer' },
    { name: 'Navbar', id: 'navbar' },
    { name: 'NumberInput', id: 'numberinput' },
    { name: 'Pagination', id: 'pagination' },
    { name: 'Popover', id: 'popover' },
    { name: 'Progress', id: 'progress' },
    { name: 'RadioGroup', id: 'radiogroup' },
    { name: 'RangeCalendar', id: 'rangecalendar' },
    { name: 'ScrollShadow', id: 'scrollshadow' },
    { name: 'Select', id: 'select' },
    { name: 'Skeleton', id: 'skeleton' },
    { name: 'Slider', id: 'slider' },
    { name: 'Snippet', id: 'snippet' },
    { name: 'Spacer', id: 'spacer' },
    { name: 'Switch', id: 'switch' },
    { name: 'Table', id: 'table' },
    { name: 'Tabs', id: 'tabs' },
    { name: 'Toast', id: 'toast' },
    { name: 'Textarea', id: 'textarea' },
    { name: 'TimeInput', id: 'timeinput' },
    { name: 'Tooltip', id: 'tooltip' },
    { name: 'User', id: 'user' },
  ];

  const scrollToComponent = (component) => {
    const componentId = typeof component === 'string' ? component.toLowerCase() : component.id;
    const element = document.getElementById(`component-${componentId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sidebarStyle = {
    position: 'fixed',
    left: 0,
    top: '60px', // Below navbar
    width: '250px',
    height: 'calc(100vh - 60px)',
    backgroundColor: '#fff',
    borderRight: '1px solid #e0e0e0',
    overflowY: 'auto',
    padding: '20px 0',
    zIndex: 100,
    boxShadow: '2px 0 4px rgba(0,0,0,0.05)',
  };

  const sidebarHeaderStyle = {
    padding: '0 20px 16px 20px',
    borderBottom: '1px solid #e0e0e0',
    marginBottom: '16px',
  };

  const sidebarTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
  };

  const sidebarItemStyle = {
    padding: '8px 20px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#666',
    transition: 'all 0.2s',
    borderLeft: '3px solid transparent',
  };

  const contentWrapperStyle = {
    marginLeft: '250px',
    padding: '24px',
  };

  const contentContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  return (
    <div className="app">
      <Navbar
        brand={{ text: 'Custom UI Library', href: '#' }}
        links={[
          { text: 'Home', href: '#' },
          { text: 'Components', href: '#components' },
          { text: 'About', href: '#about' },
        ]}
        variant="default"
      />

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={sidebarHeaderStyle}>
          <h3 style={sidebarTitleStyle}>Components</h3>
          <p style={{ fontSize: '12px', color: '#999', margin: '4px 0 0 0' }}>
            {components.length} components
          </p>
        </div>
        {components.map((component) => (
          <div
            key={component.id || component}
            style={sidebarItemStyle}
            onClick={() => scrollToComponent(component)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f5f5f5';
              e.target.style.borderLeftColor = '#007bff';
              e.target.style.color = '#007bff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderLeftColor = 'transparent';
              e.target.style.color = '#666';
            }}
          >
            {component.name || component}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={contentWrapperStyle}>
        <div style={contentContainerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '48px', padding: '48px 0' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Custom UI Component Library</h1>
            <p style={{ fontSize: '18px', color: '#666' }}>
              A comprehensive collection of reusable React components
            </p>
          </div>

          <div id="components">
            <ButtonDemo />
            <CardDemo />
            <InputDemo />
            <NumberInputDemo />
            <ModalDemo />
            <DrawerDemo />
            <SpinnerDemo />
            <AccordionDemo />
            <AutocompleteDemo />
            <AlertDemo />
            <AvatarDemo />
            <BadgeDemo />
            <BreadcrumbsDemo />
            <CalendarDemo />
            <RangeCalendarDemo />
            <DatePickerDemo />
            <DateRangePickerDemo />
            <CheckboxDemo />
            <CheckboxGroupDemo />
            <RadioGroupDemo />
            <ChipDemo />
            <ProgressDemo />
            <CircularProgressDemo />
            <CodeDemo />
            <SnippetDemo />
            <DividerDemo />
            <DropdownDemo />
            <SelectDemo />
            <PaginationDemo />
            <PopoverDemo />
            <SliderDemo />
            <SwitchDemo />
            <SkeletonDemo />
            <SpacerDemo />
            <ScrollShadowDemo />
            <TableDemo />
            <TabsDemo />
            <ToastDemo />
            <TextareaDemo />
            <TimeInputDemo />
            <TooltipDemo />
            <UserDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
