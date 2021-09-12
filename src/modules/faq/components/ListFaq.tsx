import { FC, useCallback, useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MainGrid } from 'components/MainGrid';
import { Collapse, IconButton, List, ListItem, ListItemText, SvgIcon, Typography } from '@material-ui/core';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import { ChevronCloseIcon } from 'icons/ChevronCloseIcon';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
  },
  itemWrap: {
    marginBottom: 30,
    minHeight: 66,
  },
  title: {
    color: `#1A0D7C`,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
  button: {
    transition: theme.transitions.create(['transform']),
  },
  rotate: { transform: 'rotate(180deg)' },
}));

const ListFaq: FC = () => {
  const [listActive, setListActive] = useState<number[]>([]);
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();

  const faqDatas = useMemo(() => {
    return Array.from(Array(10)).map((_, idx) => ({
      id: idx + 1,
      title: t(`faq.title_${idx + 1}` as any),
      description: t(`faq.description_${idx + 1}` as any),
    }));
  }, [t]);

  const setActive = useCallback(
    (index: number) => {
      if (listActive.includes(index)) {
        return setListActive((old) => old.filter((x) => x !== index));
      }
      setListActive((old) => [...old, index]);
    },
    [listActive]
  );

  return (
    <MainGrid className={classes.root}>
      <List component="nav">
        {faqDatas.map((faq) => (
          <div className={classes.itemWrap} key={faq.id}>
            <ListItem className="cursor" onClick={() => setActive(faq.id)}>
              <ListItemText primaryTypographyProps={{ variant: 'h3', className: classes.title }} primary={faq.title} />
              <IconButton className={clsx({ [classes.button]: true, [classes.rotate]: listActive.includes(faq.id) })}>
                <ChevronCloseIcon />
              </IconButton>
            </ListItem>
            <Collapse in={listActive.includes(faq.id)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText primary={faq.description} />
                </ListItem>
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </MainGrid>
  );
};

export default ListFaq;
