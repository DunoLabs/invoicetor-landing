import 'components/Organism/Editor/Editor.scss';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Image,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
  Center,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export default function InvoiceImage({
  yourLogo,
  resetForm,
  getLogo,
  alertMessage,
}) {
  const [sliderValue, setSliderValue] = useState('150');
  const [isOpenPop, setIsOpenPop] = useState(false);
  const open = () => setIsOpenPop(!isOpenPop);
  const close = () => setIsOpenPop(false);
  const formik = useFormik({
    initialValues: { yourLogo },
  });
  // aleart message

  useEffect(() => {
    if (resetForm) {
      formik.values.yourLogo = '';
    }
  }, [resetForm, formik]);

  useEffect(() => {
    getLogo(formik.values.yourLogo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // Upload Image in localstorage starts
  const imageUpload = e => {
    let file = e.target.files[0];
    getBase64(file).then(base64 => {
      formik.setFieldValue('yourLogo.image', base64);
      formik.setFieldValue('yourLogo.imageSize', sliderValue);
    });
    alertMessage('Image uploaded successfully', 'success');
  };

  // change Image Size using slider
  const changeImageSize = value => {
    setSliderValue(value);
    formik.setFieldValue('yourLogo.imageSize', value);
  };

  return (
    <>
      <Stack spacing={4}>
        <Box>
          <Popover isOpen={isOpenPop} onClose={close} placement="top-start">
            <PopoverTrigger>
              {formik.values.yourLogo.image ? (
                <Flex>
                  <Image
                    src={formik.values.yourLogo.image}
                    alt="company logo"
                    className="company-logo"
                    style={{
                      borderRadius: '10px',
                      marginBottom: '10px',
                    }}
                    w={formik.values.yourLogo.imageSize}
                    h={formik.values.yourLogo.imageSize}
                    onClick={() => {
                      document.getElementById('uploadFile').click();
                    }}
                  />{' '}
                  <Menu>
                    <MenuButton
                      m={2}
                      as={IconButton}
                      aria-label="Options"
                      icon={<RiIcons.RiMenu3Fill />}
                      variant="outline"
                    />

                    <MenuList>
                      <MenuItem
                        onClick={() => {
                          document.getElementById('uploadFile').click();
                        }}
                        icon={<RiIcons.RiUpload2Fill />}
                      >
                        Upload Image
                      </MenuItem>
                      <MenuItem
                        icon={<MdIcons.MdPhotoSizeSelectLarge />}
                        onClick={open}
                      >
                        Resize Logo
                      </MenuItem>{' '}
                      <MenuItem
                        icon={<RiIcons.RiDeleteBin3Line />}
                        onClick={() => {
                          formik.setFieldValue('yourLogo.image', '');
                          formik.setFieldValue('yourLogo.imageSize', '150');

                          alertMessage('🗑️ Company Logo Cleared');
                        }}
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              ) : (
                <Center
                  w="200px"
                  h="200px"
                  style={{
                    borderRadius: '10px',
                    marginBottom: '10px',
                    border: '4px dotted #eaeaea',
                  }}
                  onClick={() => {
                    document.getElementById('uploadFile').click();
                  }}
                >
                  Add Logo
                </Center>
              )}
            </PopoverTrigger>
            <PopoverContent w={300}>
              <PopoverHeader fontWeight="semibold">Resize Logo</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Center>
                  <Slider
                    mb={7}
                    aria-label="slider-ex-3"
                    defaultValue={formik.values.yourLogo.imageSize}
                    orientation="horizontal"
                    colorScheme={'purple'}
                    maxW="200"
                    min={100}
                    max={250}
                    onChange={v => changeImageSize(v)}
                    _hover={{
                      cursor: 'grab',
                    }}
                  >
                    <SliderMark value={100} mt="3" ml="-2.5" fontSize="sm">
                      100px
                    </SliderMark>{' '}
                    <SliderMark value={150} mt="3" ml="-2.5" fontSize="sm">
                      150px
                    </SliderMark>{' '}
                    <SliderMark value={200} mt="3" ml="-2.5" fontSize="sm">
                      200px
                    </SliderMark>{' '}
                    <SliderMark value={250} mt="3" ml="-2.5" fontSize="sm">
                      250px
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                      boxSize={6}
                      _hover={{
                        cursor: 'grab',
                      }}
                    >
                      <FaIcons.FaPaperPlane color="black" fontSize={10} />
                    </SliderThumb>
                  </Slider>
                </Center>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* Image Size Slider  */}

          <input
            id="uploadFile"
            type="file"
            name="image"
            className="img"
            onChange={e => imageUpload(e)}
          />
        </Box>
      </Stack>
    </>
  );
}
