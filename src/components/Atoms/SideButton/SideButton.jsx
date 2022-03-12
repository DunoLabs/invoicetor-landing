import './SideButton.scss';
import { Text, useColorModeValue } from '@chakra-ui/react';

export default function SideButton() {
  return (
    <Text
      as={'a'}
      size={'sm'}
      href="!#"
      title="This product is powered by DunoLabs"
      rel="noopener"
      target="_blank"
      class="powered-by"
    >
      DunoLabs{' '}
      <Text as="span" class="powered-by-text" ms={2}>
        🌷
      </Text>
    </Text>
  );
}
